import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import diningRoute from './route/dining.route.js';
import cors from 'cors';
import jwt from 'jsonwebtoken'
const secretKey = "Rashi@43$23"

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;


// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected'))
.catch((error) => console.log('Database connection error:', error));

// Define routes
app.use('/menu', diningRoute);

app.post('/login' ,(req,res)=>{
  const user = {
    id:1,
    username: "Rashi",
    password :123
  }
  jwt.sign({user},secretKey,{expiresIn:'300s'} ,(err, token)=>{
    res.json({
      token
    })

  })
})

function verifyToken  (req,res){

}

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

