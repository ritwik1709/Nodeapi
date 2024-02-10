import express from 'express';
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from "cors";
export const app = express();

config({
    path:"./config.env"
});

//middlewares
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:[process.env.frontend_url],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
//using routes
app.use(userRouter);
app.use(taskRouter);

 

