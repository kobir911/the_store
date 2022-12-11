import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.status(200).send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);

  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send({ message: 'Product not found!!!' });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port} , You'r connected`);
});
