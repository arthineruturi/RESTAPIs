const express = require("express");
const morgan = require("morgan");
const path = require("path");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

module.exports = app;
