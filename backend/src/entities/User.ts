import uuid from "uuid/v4";
export interface IUser {
  token?: string;
  rut: string;
  businessName: string;
  password: string;
}

export class User implements IUser {
  public token?: string;
  public rut: string;
  public businessName: string;
  public password: string;

  constructor(rut: string, businessName: string, password: string) {
    this.rut = rut;
    this.businessName = businessName;
    this.password = password;
    this.token = uuid();
  }
}
