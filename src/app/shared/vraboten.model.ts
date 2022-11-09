export class Vraboten {
  public id: number;
  public email: string;
  public username: string;
  public salterId: number;
  public idNavigation: null;

  constructor(
    id: number,
    email: string,
    username: string,
    salterId: number,
    idNavigation: null
  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.salterId = salterId;
    this.idNavigation = idNavigation;
  }
}
