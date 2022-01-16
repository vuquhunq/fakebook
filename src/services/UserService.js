import axios from "axios";
import { domain } from "../config/config";
import HeaderService from "./HeaderService";
export class UserService {
  getAllUser = () => {
    return axios.get(`${domain}/api/user`, { headers: HeaderService() });
  };
  getUserDetail = (id) => {
    return axios.get(`${domain}/api/user/${id}`, {
      headers: HeaderService(),
    });
  };
}
export const userService = new UserService();
