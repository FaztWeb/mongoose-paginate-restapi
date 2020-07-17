import express from 'express'
const app = express();

import productRoutes from './routes/products'

app.use(express.json());

app.use(productRoutes);

export default app;