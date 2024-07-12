const mongoose = require(`mongoose`);
require("dotenv").config();
const uri = process.env.URI;

const connectDB = async () => {
  try {
    mongoose
      .connect(uri)
      .then(() => {
        console.log("Successfully connected to MongoDB");
      })
      .catch((error) => {
        console.log("Unable to connect to MongoDB ");
        console.error(error);
      });
  } catch (error) {
    console.log("Unable to connect to MongoDB ");
    console.error(error);
  }
};

module.exports = connectDB;
