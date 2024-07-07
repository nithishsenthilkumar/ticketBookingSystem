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
app.post('/create-account',(req,res)=>{

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
      showTimings: showTimings.map(show => ({
        showTime: show.showTime,
        seats: Array.from({ length: 70 }, (_, i) => ({
          seatId: i + 1,
          isFilled: false
        }))
      }))
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