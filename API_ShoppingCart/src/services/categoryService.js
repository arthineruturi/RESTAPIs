// const axios = require("axios");

// exports.fetchAllCategories = async () => {
//   try {
//     const response = await axios.get("https://fakestoreapi.com/products/categories");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };
const axios = require("axios");

exports.fetchAllCategories = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

exports.addCategory = async (categoryData) => {
  try {
    // Since fakestoreapi.com does not support adding categories, we mock the behavior.
    return { message: "Category added successfully", category: categoryData };
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};
