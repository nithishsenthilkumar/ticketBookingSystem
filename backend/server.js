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

const Movies=require('./Models/Movies');

//jwt
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('./utilities');

//homeapi
app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

//User Create
app.post('/create-account',(req,res)=>{

})

//Bookings Api
app.post('/book-tickets',(req,res)=>{
  
})

//Movies Api
app.post('/movies',async(req,res)=>{
  const {movieId,name,duration,director}=req.body;

  try{
    const movie=new Movies({
      movieId,
      name,
      duration,
      director,
    })

    await movie.save(); 
    return res.json({
      error:'false',
      movie,
      message:"Movie added successfully"
    })
  }catch(error){
    console.log("Error:",error);
  }
})

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});



module.exports=app;