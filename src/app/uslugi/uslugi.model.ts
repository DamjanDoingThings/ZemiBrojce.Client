export class Uslugi {
  public id: number;
  public imeUsluga: string;
  public numbers: number[];
  public salterUsluga: number[];

  constructor(
    id: number,
    imeUsluga: string,
    numbers: number[],
    shalterUsluga: number[]
  ) {
    this.id = id;
    this.imeUsluga = imeUsluga;
    this.numbers = numbers;
    this.salterUsluga = shalterUsluga;
  }
}
