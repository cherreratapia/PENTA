import { InvoiceDao, UserDao } from "../daos";
import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK, FORBIDDEN } from "http-status-codes";
import { IInvoice } from "../entities";

// Init shared
const router = Router();
const invoiceDao = new InvoiceDao();
const userDao = new UserDao();

/******************************************************************************
 *                      Get Invoices - "GET /api/invoices/"
 ******************************************************************************/

router.get("/", async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(FORBIDDEN);
  const filterBy = await userDao.get(authorization);
  if (!filterBy) return res.status(FORBIDDEN);
  const invoice: IInvoice[] = await invoiceDao.getByCompany(filterBy);
  if (!invoice)
    return res
      .status(BAD_REQUEST)
      .json({ message: "PROBLEMA AL OBTENER FACTURAS" });
  return res.status(OK).json({ data: invoice });
});

/******************************************************************************
 *                      Get Invoice Detail - "GET /api/invoices/:detail"
 ******************************************************************************/

router.get("/:emission", async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(FORBIDDEN);
  const { emission } = req.params;
  if (!emission) return res.status(BAD_REQUEST);

  const invoice = await invoiceDao.getDetail(emission);
  if (!invoice)
    return res
      .status(BAD_REQUEST)
      .json({ message: "NÚMERO DE EMISIÓN INCORRECTO" });
  return res.status(OK).json({ data: invoice });
});

export default router;
