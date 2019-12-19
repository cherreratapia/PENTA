import React from "react";
import "./style/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import User from "./components/user";
import InvoiceList from "./components/invoice-list";
import { Router, Link } from "@reach/router";
import ProtectedRoute from "./components/protected-route";

const App: React.FC = () => {
  return (
    <Router>
      <User path="/" />
      <InvoiceList path="/invoice" />
    </Router>
  );
};

export default App;
