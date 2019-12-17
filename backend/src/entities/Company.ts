export interface ICompany {
  RUT: string;
  businessName: string;
}
export class Company implements ICompany {
  RUT: string;
  businessName: string;

  constructor(RUT: string, businessName: string) {
    this.RUT = RUT;
    this.businessName = businessName;
  }
}
