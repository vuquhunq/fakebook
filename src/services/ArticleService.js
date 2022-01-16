import axios from "axios";
import { domain } from "../config/config";
import HeaderService from "./HeaderService";
export class ArticleService {
  getUserArticle = (id) => {
    return axios.get(`${domain}/api/posts/${id}`, {
      headers: HeaderService(),
    });
  };
}
export const articleService = new ArticleService();
