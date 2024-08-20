import 'dotenv/config'
import express, { Router } from 'express';
import connectDb from './Db/index.js';
import cors from 'cors';
import cookieParser from "cookie-parser";
import { User } from './Models/user.model.js';
import {Issue} from './Models/issue.model.js';
import { Lab } from './Models/lab.model.js';    
import router from './Routes/auth.js';
import issueRoutes from './Routes/issueRoute.js'


const app=express();
const port=process.env.PORT ;
app.use(cors());
app.use(cookieParser());
app.use(express.json());        
connectDb();
app.use("/", router);    
app.use("/api/issues",issueRoutes);
// app.post("/api/messages", (req, res) => res.send("Hello, world!"));

app.listen(port, ()=>{
    console.log(`Server is listening on port http://localhost:${port}`);
})