const mongoose = require("mongoose");

async function connectDB(url) {
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connetion successful");
  } catch (ex) {
    console.error("connection faild.", ex);
    process.exit(1);
  }
}

module.exports = connectDB;
