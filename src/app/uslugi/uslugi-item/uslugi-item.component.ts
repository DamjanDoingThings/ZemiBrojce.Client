import { Component, Input, OnInit } from '@angular/core';
import { ServerContactService } from 'src/app/shared/server-contact.service';
import { Uslugi } from '../uslugi.model';

@Component({
  selector: 'app-uslugi-item',
  templateUrl: './uslugi-item.component.html',
  styleUrls: ['./uslugi-item.component.css'],
})
export class UslugiItemComponent implements OnInit {
  @Input()
  uslugi!: Uslugi;

  @Input()
  index!: number;

  @Input()
  broj: number;

  constructor(private serverContactService: ServerContactService) {}

  ngOnInit(): void {}

  onGenerateNum(id: number) {
    this.serverContactService.getNum(id);
  }
}
