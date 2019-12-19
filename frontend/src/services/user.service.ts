import env from "../env/dev";
import Axios from "axios";
class UserService {
  register = async (rut: string, businessName: string, password: string) => {
    return await Axios.post(
      `http://${env.url}:${env.port}/${env.api}/users/users`,
      {
        rut,
        businessName,
        password
      }
    );
  };
  login = async (rut: string, password: string) => {
    return await Axios.post(
      `http://${env.url}:${env.port}/${env.api}/users/login`,
      {
        rut,
        password
      }
    );
  };
}
export default UserService;
