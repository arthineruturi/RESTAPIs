const productService = require("../services/productService");
const cache = require("../config/cache");

exports.getAllProducts = async (req, res) => {
  const cacheKey = "products";

  if (cache.has(cacheKey)) {
    console.log(`Cache hit for key: ${cacheKey}`);
    return res.json(cache.get(cacheKey));
  }

  try {
    const products = await productService.fetchAllProducts();
    cache.set(cacheKey, products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  const cacheKey = `category-${category}`;

  if (cache.has(cacheKey)) {
    console.log(`Cache hit for key: ${cacheKey}`);
    return res.json(cache.get(cacheKey));
  }

  try {
    const products = await productService.fetchProductsByCategory(category);
    cache.set(cacheKey, products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by category" });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await productService.addProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
};
