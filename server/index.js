import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use('/', authRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        error: message,
        statusCode: statusCode
    })
}) 

app.listen(PORT, ()=>{
    console.log('Server is running on port 3000');
})