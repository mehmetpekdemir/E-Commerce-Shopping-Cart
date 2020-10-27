import axios from "axios";
import { url } from "./_config";

class ProductService {

  getProducts(path) {
    return axios.get(url + path);
  }

}

export default new ProductService();
