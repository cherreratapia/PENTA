import { Company } from "./Company";
import { InvoiceDetail } from "./Invoice-Detail";

export enum INVOICE_TYPE {
  "INVOICE" = "factura",
  "TICKET" = "boleta"
}
export interface IInvoice {
  emission: number;
  type: INVOICE_TYPE;
  folio: number;
  issuer: Company;
  receiver: Company;
  items: InvoiceDetail[];
}

export class Invoice implements IInvoice {
  public emission: number;
  public type: INVOICE_TYPE;
  public folio: number;
  public issuer: Company;
  public receiver: Company;
  public items: InvoiceDetail[];

  constructor(
    emission: number,
    type: INVOICE_TYPE,
    folio: number,
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
