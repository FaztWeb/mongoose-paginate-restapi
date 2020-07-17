const { Router } = require("express");
const router = Router();

const Product = require("../models/Product");

router.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
});

router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product)
    return res.status(404).json({
      message: "The Product was not found",
    });

  res.json(product);
});

router.put("/products/:id", async (req, res) => {
  const productUpdated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: false }
  );
  res.json(productUpdated);
});

router.delete("/products/:id", async (req, res) => {
  const productRemoved = await Product.findByIdAndDelete(req.params.id);
  res.json(productRemoved);
});

module.exports = router;
