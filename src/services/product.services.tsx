import axios from "axios";
import { ApiUrl } from "./endPointsUrl";
export async function getAllProducts() {
  try {
    const response = await axios.get(ApiUrl + "/product");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllOrdersByType(type: any) {
  try {
    const response = await axios.get(ApiUrl + `/product/type/${type}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductDetails(id: any) {
  try {
    const response = await axios.get(ApiUrl + `/product/item/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllBrands() {
  try {
    const response = await axios.get(ApiUrl + `/product/brands`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
