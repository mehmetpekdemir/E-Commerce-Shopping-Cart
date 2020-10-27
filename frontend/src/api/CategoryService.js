import axios from "axios";
import { url } from "./_config";

class CategoryService {

  getCategories() {
    return axios.get(url + "categories");
  }
  
}

export default new CategoryService();
