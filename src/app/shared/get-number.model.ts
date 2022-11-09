export class GetNumber {
  public id: number;
  public generiran: string;
  public uslugaId: number;
  public salterId: number;
  public najnovBroj: number;
  public momentalenBroj: number;
  public salter: null;
  public usluga: null;

  constructor(
    id: number,
    generiran: string,
    uslugaId: number,
    salterId: number,
    najnovBroj: number,
    momentalenBroj: number,
    salter: null,
    usluga: null
  ) {
    this.id = id;
    this.generiran = generiran;
    this.uslugaId = uslugaId;
    this.salterId = salterId;
    this.najnovBroj = najnovBroj;
    this.momentalenBroj = momentalenBroj;
    this.salter = salter;
    this.usluga = usluga;
  }
}
