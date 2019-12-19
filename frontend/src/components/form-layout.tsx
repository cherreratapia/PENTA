import React, { useState, FormEvent } from "react";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import UserService from "../services/user.service";
import { navigate } from "@reach/router";

const FormLayout: React.FC<any> = ({ type }) => {
  const [rut, setRut] = useState("");
  const [businessName, setBusiness] = useState("");
  const [password, setPassword] = useState("");
  const userService = new UserService();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (type === "register") {
      try {
        const response = await userService.register(
          rut,
          businessName,
          password
        );
        sessionStorage.setItem("token", response.data.token);
        navigate("/invoice");
      } catch (error) {
        console.log("error", error);
        navigate("/");
        // TODO USAR TOASTR PARA DAR EL ERROR
      }
    } else {
      try {
        const response = await userService.login(rut, password);
        sessionStorage.setItem("token", response.data.token);
        navigate("/invoice");
      } catch (error) {
        console.log("error", error);
        navigate("/");
        // TODO USAR TOASTR PARA DAR EL ERROR
      }
      console.log("login");
    }
  };
  return (
    <Box className="w-full col-6 py-3 d-flex flex-column align-items-center">
      <div className="d-flex my-2">
        <h3>{type === "register" ? "REGISTRAR" : "INICIAR SESIÓN"}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rut">RUT</label>
          <input
            className="form-control"
            type="text"
            name="rut"
            id="rut"
            placeholder="111.111-6"
            onChange={e => setRut(e.target.value)}
          />
        </div>
        {type === "register" && (
          <div className="form-group">
            <label htmlFor="businessName">Razon Social</label>
            <input
              className="form-control"
              type="text"
              name="businessName"
              id="businessName"
              placeholder="Company A"
              onChange={e => setBusiness(e.target.value)}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="*****"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex my-2">
          <Button
            disabled={rut === "" || password === ""}
            type="submit"
            variant="contained"
            color="primary"
          >
            {type === "register" ? "Registrar" : "Iniciar"}
          </Button>
        </div>
      </form>
    </Box>
  );
};
export default FormLayout;
