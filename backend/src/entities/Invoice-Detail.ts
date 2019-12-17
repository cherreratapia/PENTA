export interface IInvoiceDetail {
  amount: number;
  iva: number;
  detail: string;
}

export class InvoiceDetail implements IInvoiceDetail {
  amount: number;
  iva: number;
  detail: string;
  constructor(amount: number, iva: number, detail: string) {
    this.amount = amount;
    this.iva = iva;
    this.detail = detail;
  }
}
