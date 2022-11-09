import { Component, OnInit } from '@angular/core';
import { ServerContactService } from '../shared/server-contact.service';

@Component({
  selector: 'app-shalteri',
  templateUrl: './shalteri.component.html',
  styleUrls: ['./shalteri.component.css'],
})
export class ShalteriComponent implements OnInit {
  shalter1CurrNum: number;
  shalter2CurrNum: number;
  shalter3CurrNum: number;

  constructor(private serverContactService: ServerContactService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.updateNums();
    }, 500);
    
  }

  updateNums() {
    this.serverContactService.getShalterCurrNum();
    this.shalter1CurrNum = this.serverContactService.shalter1CurrNum;
    this.shalter2CurrNum = this.serverContactService.shalter2CurrNum;
    this.shalter3CurrNum = this.serverContactService.shalter3CurrNum;
    // console.log('updateNums!!!!!!!!!!');
  }
}
