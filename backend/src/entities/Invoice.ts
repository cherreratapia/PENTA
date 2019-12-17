import { Company } from "./Company";
import { InvoiceDetail } from "./Invoice-Detail";

export enum INVOICE_TYPE {
  "INVOICE" = "factura",
  "TICKET" = "boleta"
}
export interface IInvoice {
  emission: Date;
  type: INVOICE_TYPE;
  folio: string;
  issuer: Company;
  receiver: Company;
  items: InvoiceDetail[];
}

export class Invoice implements IInvoice {
  public emission: Date;
  public type: INVOICE_TYPE;
  public folio: string;
  public issuer: Company;
  public receiver: Company;
  public items: InvoiceDetail[];

  constructor(
    emission: Date,
    type: INVOICE_TYPE,
    folio: string,
    issuer: Company,
    receiver: Company,
    items: InvoiceDetail[]
  ) {
    this.emission = emission;
    this.type = type;
    this.folio = folio;
    this.issuer = issuer;
    this.receiver = receiver;
    this.items = items;
  }
}
