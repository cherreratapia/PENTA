describe("Invoices", () => {
  it("Get invoices", () => {
    const invoiceDAO = invoiceDao();
    const invoices: Invoices[] = invoiceDAO.getAllInvoices();
    expect(invoices.length).toBe(6);
    expect(invoices).toEqual([
      [
        {
          emision: 1559347200,
          tipo: "factura",
          folio: 1
        },
        {
          emision: 1559433600,
          tipo: "factura",
          folio: 2
        },
        {
          emision: 1559433600,
          tipo: "factura",
          folio: 1
        },
        {
          emision: 1559437200,
          tipo: "factura",
          folio: 2
        },
        {
          emision: 1559477200,
          tipo: "factura",
          folio: 3
        },
        {
          emision: 1559487200,
          tipo: "factura",
          folio: 3
        }
      ]
    ]);
  });
});
