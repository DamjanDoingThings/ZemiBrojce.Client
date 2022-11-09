import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServerContactService } from '../shared/server-contact.service';
import { Uslugi } from './uslugi.model';
import { UslugiService } from './uslugi.service';

@Component({
  selector: 'app-uslugi',
  templateUrl: './uslugi.component.html',
  styleUrls: ['./uslugi.component.css'],
})
export class UslugiComponent implements OnInit {
  uslugi: Uslugi;
  num:number;

  constructor(
    private serverContactService: ServerContactService,
    private uslugiService: UslugiService
  ) {}

  ngOnInit() {
    this.serverContactService.fetchUslugi().subscribe((res) => {
      this.uslugi = res;
    });
  }

  updateNum() {
    this.serverContactService.br.subscribe(res=>{
      this.num = res;
    });
    console.log('updateNum: ' + this.num);
  }  
}
