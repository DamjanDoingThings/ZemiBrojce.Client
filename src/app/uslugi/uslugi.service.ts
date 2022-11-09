import { Injectable } from '@angular/core';
import { Uslugi } from './uslugi.model';

@Injectable({ providedIn: 'root' })
export class UslugiService {
  uslugi!: Uslugi[];

  setUslugi(uslugi: Uslugi[]) {
    this.uslugi = uslugi;
    console.log('setUslugi');
  }

  getUslugi() {
    return this.uslugi;
  }
}
