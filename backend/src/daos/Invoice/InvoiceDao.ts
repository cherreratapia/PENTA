import { Invoice } from "../../entities/invoice";
import fs from "fs";
import path from "path";
import parser from "xml-js";
import { InvoiceDetail } from "src/entities/Invoice-Detail";

export interface IInvoiceDao {
  getAll: () => Promise<string[]>;
}

export class InvoiceDao implements IInvoiceDao {
  /**
   *
   */
  public async getAll(): Promise<any[]> {
    return new Promise(async (resolve, reject) => {
      const basePath = path.resolve("src/", "store/");
      const invoice: Invoice[] = [];
      const filesName = await fs.readdirSync(basePath);
      for (const name of filesName) {
        const buffer = await fs.readFileSync(`${basePath}/${name}`);
        const parsed = await (parser.xml2js(buffer.toString(), {
          compact: true,
          trim: true
        }) as any);
        const items: InvoiceDetail[] = [];
        if (parsed.dte.items.detalle.length) {
          parsed.dte.items.detalle.forEach((detail: any) => {
            items.push({
              amount: Number(detail._attributes.monto),
              iva: Number(detail._attributes.iva),
              detail: detail._text
            });
          });
        } else {
          items.push({
            amount: Number(parsed.dte.items.detalle._attributes.monto),
            iva: Number(parsed.dte.items.detalle._attributes.iva),
            detail: parsed.dte.items.detalle._text
          });
        }
        invoice.push({
          emission: Number(parsed.dte._attributes.emision),
          type: parsed.dte._attributes.tipo,
          folio: Number(parsed.dte._attributes.folio),
          issuer: {
            RUT: parsed.dte.emisor._attributes.rut,
            businessName: parsed.dte.emisor._attributes.razonSocial
          },
          receiver: {
            RUT: parsed.dte.receptor._attributes.rut,
            businessName: parsed.dte.receptor._attributes.razonSocial
          },
          items
        });
      }
      resolve(invoice);
    });
  }
}
