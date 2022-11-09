import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Uslugi } from '../uslugi/uslugi.model';
import { UslugiService } from '../uslugi/uslugi.service';
import { GetNumber } from './get-number.model';
import { Vraboten } from './vraboten.model';

@Injectable({ providedIn: 'root' })
export class ServerContactService {
  br = new BehaviorSubject(null);
  shalter1CurrNum: number;
  shalter2CurrNum: number;
  shalter3CurrNum: number;
  shalterHasUpdated = false;
  singleShalterNum = new BehaviorSubject(null);

  constructor(private http: HttpClient, private uslugiService: UslugiService) {}

  fetchUslugi() {
    return this.http.get<Uslugi>('https://localhost:44382/api/Uslugi');
  }

  getNum(id: number) {
    this.shalterHasUpdated = true;
    return this.http
      .get<GetNumber>('https://localhost:44382/api/Number/get-number/' + id)
      .subscribe((res) => {
        this.br.next(res.najnovBroj);
        this.getShalterCurrNum();
      });
  }

  getSingleShalterCurrNum(id: number): any {
    this.shalterHasUpdated = false;
    this.http
      .get<GetNumber>(
        'https://localhost:44382/api/Salter/get-salter-number/' + id
      )
      .subscribe((res) => {
        this.singleShalterNum.next(res.momentalenBroj);
        // console.log('getSingleShalterCurrNum: ' + this.singleShalterNum);
      });
  }

  nextShalterNum(id: number): any {
    this.shalterHasUpdated = true;
    this.http
      .get<GetNumber>(
        'https://localhost:44382/api/Number/update-curr-number/' + id
      )
      .subscribe((res) => {
        this.singleShalterNum.next(res.momentalenBroj);
        // console.log('getSingleShalterCurrNum: ' + this.singleShalterNum);
      });
  }

  getShalterCurrNum(): any {
    this.shalterHasUpdated = false;
    this.http
      .get<GetNumber>('https://localhost:44382/api/Salter/get-salter-number/1')
      .subscribe((res) => {
        this.shalter1CurrNum = res.momentalenBroj;
      });

    this.http
      .get<GetNumber>('https://localhost:44382/api/Salter/get-salter-number/2')
      .subscribe((res) => {
        this.shalter2CurrNum = res.momentalenBroj;
      });

    this.http
      .get<GetNumber>('https://localhost:44382/api/Salter/get-salter-number/3')
      .subscribe((res) => {
        this.shalter3CurrNum = res.momentalenBroj;
      });
  }

  korisnikNajava(korisnikId: number, shalterId: number) {
    let params = new HttpParams();
    params = params.append('userId', korisnikId);
    params = params.append('salterId', shalterId);
    this.http.post<Vraboten>(
      'https://localhost:44382/api/User/change-user-position',
      {
        params: params,
      }
    );

    this.getSingleShalterCurrNum(shalterId);
  }
}
