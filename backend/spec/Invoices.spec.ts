import { InvoiceDao } from "../src/daos";
import { Invoice } from "../src/entities";

describe("Invoices", () => {
  it("Get invoices", async () => {
    const invoiceDAO = new InvoiceDao();
    const invoices = await invoiceDAO.getAll();
    expect(invoices.length).toBe(6);
    expect(invoices).toEqual([
      [
        {
          emission: 1559347200,
          type: "factura",
          folio: 1,
          issuer: {
            RUT: "111.111-6",
            businessName: "Company A"
          },
          receiver: {
            RUT: "222.222-1",
            businessName: "Company B"
          },
          items: [
            {
              amount: 100,
              detail: "Service",
              iva: 19
            }
          ]
        },
        {
          emission: 1559433600,
          type: "factura",
          folio: 2,
          issuer: {
            RUT: "111.111-6",
            businessName: "Company A"
          },
          receiver: {
            RUT: "222.222-1",
            businessName: "Company B"
          },
          items: [
            {
              amount: 100,
              detail: "Service",
              iva: 19
            },
            {
              amount: 100,
              detail: "Product A",
              iva: 19
            },
            {
              amount: 200,
              detail: "Product B",
              iva: 38
            }
          ]
        },
        {
          emission: 1559433600,
          type: "factura",
          folio: 1,
          issuer: {
            RUT: "222.222-1",
            businessName: "Company B"
          },
          receiver: {
            RUT: "111.111-6",
            businessName: "Company A"
          },
          items: [
            {
              amount: 1000,
              detail: "Service A",
              iva: 190
            },
            {
              amount: 100,
              detail: "Service B",
              iva: 19
            }
          ]
        },
        {
          emission: 1559437200,
          type: "factura",
          folio: 2,
          issuer: {
            RUT: "222.222-1",
            businessName: "Company B"
          },
          receiver: {
            RUT: "111.111-6",
            businessName: "Company A"
          },
          items: [
            {
              amount: 1500,
              detail: "Product C",
              iva: 285
            }
          ]
        },
        {
          emission: 1559477200,
          type: "factura",
          folio: 3,
          issuer: {
            RUT: "222.222-1",
            businessName: "Company B"
          },
          receiver: {
            RUT: "111.111-6",
            businessName: "Company A"
          },
          items: [
            {
              amount: 3000,
              detail: "Product D",
              iva: 570
            },
            {
              amount: 1000,
              detail: "Product E",
              iva: 190
            }
          ]
        },
        {
          emission: 1559487200,
          type: "factura",
          folio: 3,
          issuer: {
            RUT: "111.111-6",
            businessName: "Company A"
          },
          items: [
            {
              amount: 3000,
              detail: "Product D",
              iva: 570
            },
            {
              amount: 1000,
              detail: "Product E",
              iva: 190
            }
          ],
          receiver: {
            RUT: "222.222-1",
            businessName: "Company B"
          }
        }
      ]
    ]);
  });
});
