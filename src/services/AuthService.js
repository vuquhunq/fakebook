import axios from "axios";
import { domain } from "../config/config";
export class AuthService {
  login = async (username, password) => {
    return axios({
      url: `${domain}/api/login`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "WWW-Authenticate": "Basic realm=" + "Login required!",
        Authorization: "Basic " + window.btoa(`${username}:${password}`),
      },
      username,
      password,
    });
  };
  register = async (username, password, public_name, phone, email) => {
    return axios
      .post(`${domain}/api/register`, {
        public_name: public_name,
        user_name: username,
        password: password,
        phone: phone,
        email: email,
      })
      .then((res) => alert(res.data.Message))
      .catch((err) => console.log(err));
  };
  logout = () => {
    if (localStorage.getItem("accessToken")) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    }
  };
  getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
}
export const authService = new AuthService();
