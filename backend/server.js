require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 8000;


// Middleware
app.use(cors({ origin: "*" }));
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

const User =require('./Models/User');
const Movies=require('./Models/Movies');
const Booking = require("./Models/Booking");
const Theatres=require('./Models/Theatre');

//jwt
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('./utilities');

//homeapi
app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

//User Create
app.post('/create-account',async(req,res)=>{
    const newUser = new User(req.body);
  // const isUser = await User.findOne({ email: email });
    await newUser.save(); 

    const accessToken = jwt.sign({ newUser }, process.env.ACCESS_PRIVATE_KEY, {
        expiresIn: "36000m"
    });

    return res.json({
        error: false,
        newUser,
        accessToken,
        message: "Registration successful",
    });
})

//Bookings Api
app.post('/book-tickets',async(req,res)=>{
  const {userId,status,bookedAt,totalAmount}=req.body;

  try {
    const booking = new Booking({
      userId,
      status,
      bookedAt,
      totalAmount
    })

    await booking.save();
    return res.json({
      error: 'false',
      booking,
      message:"Booking added successfully"
    })
    
  } catch (error) {
    console.log("Error:",error);
  }
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

//Theatres
app.post('/theatres', async (req, res) => {
  try {
    const { id, name, location, showTimings } = req.body;

    const newTheatre = new Theatres({
      id,
      name,
      location,
    });

    await newTheatre.save();
    res.status(201).json(newTheatre);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});



module.exports=app;