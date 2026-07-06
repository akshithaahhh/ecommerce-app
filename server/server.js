const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Sample products
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Smart Watch", price: 5000 }
];

// API
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/", (req, res) => {
  res.send("E-Commerce Backend is Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});