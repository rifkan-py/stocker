const Products = require("../models/products");

async function getProducts(req, res) {
  try {
    const products = await Products.find({});
    res.json(products);
    // res.send("hi");
  } catch (ex) {
    console.error(ex);
    process.exit(1);
  }
}

module.exports = { getProducts };
