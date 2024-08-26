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
app.use(cors({
    "origin": "http://localhost:3000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials":true      
  }));
app.use(cookieParser());
app.use(express.json());        
connectDb();
app.use("/", router);    
app.use("/api/issues",issueRoutes);

app.listen(port, ()=>{
    console.log(`Server is listening on port http://localhost:${port}`);
})

