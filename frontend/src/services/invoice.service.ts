import env from "../env/dev";
import Axios from "axios";
class InvoiceService {
  get = async () => {
    const token = sessionStorage.getItem("token");
    return await Axios.get(
      `http://${env.url}:${env.port}/${env.api}/invoices`,
      { headers: { Authorization: token } }
    );
  };
  getDetail = async (emission: string) => {
    const token = sessionStorage.getItem("token");
    return await Axios.post(
      `http://${env.url}:${env.port}/${env.api}/invoices/${emission}`,
      { headers: { Authorization: token } }
    );
  };
}
export default InvoiceService;
