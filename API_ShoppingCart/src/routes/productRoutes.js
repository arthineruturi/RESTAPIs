const express = require("express");
const router = express.Router();
const productController = require("../controller/productsController");

router.get("/products", productController.getAllProducts);
router.get("/products/category/:category", productController.getProductsByCategory);
router.post("/products", productController.addProduct);

module.exports = router;
