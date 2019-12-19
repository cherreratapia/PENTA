import React, { useEffect, useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";

const InvoiceList: React.FC<RouteComponentProps> = (props: any) => {
  const [invoice, setInvoice] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) navigate("/");
    else {
    }
  });
  return <div>hola</div>;
};
export default InvoiceList;
