require("dotenv").config();
const connectDB = require("./config/db");
// const mongoose = require()
const Products = require("./models/products");

const data = require("./data/data");

connectDB(process.env.MONGO_URI);

async function seederScript() {
  try {
    await Products.deleteMany({});
    await Products.insertMany(data);
    console.log("data imported successful");
    process.exit();
  } catch (ex) {
    console.log(ex);
    process.exit(1);
  }
}
seederScript();
