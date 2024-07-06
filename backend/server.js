const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

//Middleware
app.use(cors);
app.use(express.json());

//Connet with MongoDB
const mongoose = require("mongoose");
const router = require("./Routes/Routes");
const url = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connection successfully with mongoDB");
  } catch (error) {
    console.log("Connection error: ", error.message);
  }
};



connectDB();

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
