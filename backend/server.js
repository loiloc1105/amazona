import express from "express";
import data from "./data.js";

const app = express();

app.get('/api/products/:id', (req,res) => {
  const productId = data.products.find(product => product._id === req.params.id)
  if (productId) {
    res.send(productId)
  }else{
    res.status(404).send({message: 'Product not found'})
  }
})

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("server is ready");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
