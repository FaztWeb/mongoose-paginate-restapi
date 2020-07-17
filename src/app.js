const express = require('express');
const app = express();

app.use(express.json());

const productRoutes = require('./routes/products');

app.use(productRoutes);

module.exports = app;