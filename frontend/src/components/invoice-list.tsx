import React, { useEffect, useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import InvoiceService from "../services/invoice.service";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import { RemoveRedEye } from '@material-ui/icons';

const InvoiceList: React.FC<RouteComponentProps> = (props: any) => {
  const [invoice, setInvoice] = useState<any[]>([]);
  const invoiceService = new InvoiceService();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) navigate("/");
    else {
      invoiceService
        .get()
        .then(response => {
          setInvoice([...response.data.data]);
        })
        .catch(error => console.log("error", error));
    }
  }, []);
  return (
    <div className="d-flex justify-content-center col-12">
      {!invoice && <p>Cargando...</p>}
      {invoice.length > 0 && (

        <TableContainer component={Paper}>
          <Table className="table w-full" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Fecha de emisión</TableCell>
                <TableCell align="right">Receptor</TableCell>
                <TableCell align="right">Acumulado</TableCell>
                <TableCell align="right">Detalle</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoice.map((invoice: any, index: number) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {new Date(invoice.emission * 1000).toLocaleDateString('es-CL')}
                  </TableCell>
                  <TableCell align="right">
                    {invoice.receiver.businessName}
                  </TableCell>
                  <TableCell align="right">
                    ${invoice.items.reduce((acc: number, curr: any) => acc += curr.amount, 0)}
                  </TableCell>
                  <TableCell align="right">
                    <div style={{ cursor: 'pointer' }}>
                      {/* TODO enviar a detalle de factura */}
                      <RemoveRedEye />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
export default InvoiceList;
