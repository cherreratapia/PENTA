let userDaoPath = "./User/UserDao";
let invoiceDaoPath = "./Invoice/InvoiceDao";

// tslint:disable:no-var-requires
export const { UserDao } = require(userDaoPath);
export const { InvoiceDao } = require(invoiceDaoPath);
