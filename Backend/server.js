import mongoose from "mongoose";
import cors from  "cors";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./config/DbConn.js";

const app = express();
const PORT = process.env.PORT || 3000
dotenv.config();
//connect to db
connectDB();

app.use(cors());
app.use(bodyParser);





//start server
mongoose.connection.once('open', () => {
    console.log('DB connected');

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
});