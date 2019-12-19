import { Router } from "express";
import UserRouter from "./Users";
import InvoiceRouter from "./Invoice";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", UserRouter);
router.use("/invoices", InvoiceRouter);

// Export the base-router
export default router;
