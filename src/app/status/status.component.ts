import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ServerContactService } from '../shared/server-contact.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {
  num: number;
  korisnikId: number;
  shalterId: number;
  najaven = false;
  loginInfo;

  constructor(
    private serverContactService: ServerContactService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    this.najaven = this.loginInfo.najaven;
    if (this.loginInfo.najaven) {
      this.korisnikId = this.loginInfo.korisnikId;
      this.shalterId = this.loginInfo.shalterId;
      this.serverContactService.korisnikNajava(this.korisnikId, this.shalterId);
      this.serverContactService.getSingleShalterCurrNum(this.shalterId);
      this.updateNum();
      // console.log(this.loginInfo.najaven);
    }
    this.changeDetectorRef.detectChanges();
  }

  updateNum() {
    this.serverContactService.singleShalterNum.subscribe((res) => {
      this.num = res;
    });
    // console.log('updateNum: ' + this.num);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.korisnikId = form.value.korisnikId;
    this.shalterId = form.value.shalterId;

    if (this.korisnikId == this.shalterId) {
      alert('ID на корисник мора да е различно од ID на шалтер');
      form.reset();
      return;
    }

    this.serverContactService.korisnikNajava(this.korisnikId, this.shalterId);
    this.serverContactService.getSingleShalterCurrNum(this.shalterId);
    this.updateNum();
    this.najaven = true;

    localStorage.setItem(
      'loginInfo',
      JSON.stringify({
        korisnikId: this.korisnikId,
        shalterId: this.shalterId,
        najaven: this.najaven,
      })
    );

    // console.log(localStorage.getItem('loginInfo'));
    form.reset();
  }

  nextNum(id: number) {
    this.serverContactService.nextShalterNum(id);
    this.updateNum();
  }

  logout() {
    localStorage.clear();
    this.najaven = false;
  }
}
