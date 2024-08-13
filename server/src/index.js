import 'dotenv/config'
import express from 'express';
import connectDb from './Db/index.js';
import cors from 'cors';
import cookieParser from "cookie-parser";
const app=express();
const port=process.env.PORT;
app.use(cors());
app.use(cookieParser())
connectDb();

app.listen(port, ()=>{
    console.log(`Server is listening on port http://localhost:${port}`);
})