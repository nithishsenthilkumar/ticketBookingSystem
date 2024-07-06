require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 8000;

// Middleware
app.use(cors({ origin: "" }));
app.use(express.json());

// Database connection
const config = require('./config.json');
const url = config.connectionString;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connection successfully with MongoDB");
}).catch((error) => {
  console.log("Connection error: ", error.message);
});




app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});

module.exports=app;