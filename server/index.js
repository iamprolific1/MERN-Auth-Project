import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import connectDB from './config/db.js'

const PORT = process.env.PORT || 3000

const app = express();

connectDB();
app.listen(PORT, ()=>{
    console.log('Server is running on port 3000');
})