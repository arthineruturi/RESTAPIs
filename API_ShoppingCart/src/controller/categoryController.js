const categoryService = require("../services/categoryService");
const cache = require("../config/cache");

exports.getAllCategories = async (req, res) => {
  const cacheKey = "categories";

  if (cache.has(cacheKey)) {
    console.log(`Cache hit for key: ${cacheKey}`);
    return res.json(cache.get(cacheKey));
  }

  try {
    const categories = await categoryService.fetchAllCategories();
    cache.set(cacheKey, categories);
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};
