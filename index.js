require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB(process.env.MONGO_URI);

app.use("/api/products/", productRoutes);

app.listen(port, () => {
  console.log(`server is listening on port http://localhost:${port}...`);
});
