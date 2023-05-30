import axios from 'axios';
export async function getAllProducts() {
  try {
    const response = await axios.get('http://localhost:4000/product');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
