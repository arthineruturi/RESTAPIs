const axios = require("axios");

exports.fetchAllProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

exports.fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category: ${category}`, error);
    throw error;
  }
};

exports.addProduct = async (productData) => {
  try {
    const response = await axios.post("https://fakestoreapi.com/products", productData);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};
