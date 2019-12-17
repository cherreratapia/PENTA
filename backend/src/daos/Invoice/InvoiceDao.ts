import { IInvoice } from "../../entities/invoice";

export interface IInvoiceDao {
  getAll: () => Promise<IInvoice[]>;
}

export class InvoiceDao implements IInvoiceDao {
  /**
   *
   */
  public async getAll(): Promise<IInvoice[]> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
