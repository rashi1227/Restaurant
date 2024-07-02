import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import diningRoute from './route/diningRoute.js';
import userRoute from './route/userRoute.js'
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
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
app.use('/' , userRoute);



app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

