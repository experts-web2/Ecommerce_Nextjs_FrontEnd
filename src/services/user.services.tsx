import axios from "axios";
export async function getAllProducts() {
  try {
    const response = await axios.get(Get_All_Products);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSpecifcProduct(id: string) {
  try {
    const response = await axios.post(Get_All_Products + `/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
