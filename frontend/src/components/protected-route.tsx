import React, { Component } from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import InvoiceList from "./invoice-list";

const ProtectedRoute: React.FC<RouteComponentProps & any> = ({
  component,
  ...rest
}: {
  component: any;
}) => {
  const token = sessionStorage.getItem("token");
  console.log("component", component);
  return token ? <Component /> : <Redirect from="" to="/" noThrow />;
};
export default ProtectedRoute;
