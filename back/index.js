import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./database/db.connection.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();


const app = express();



//alows us to parse all the incooming requests
app.use(express.json()); 
//routes
app.use("/api/auth",authRouter)

const port = process.env.PORT;

app.listen(port ,(req,res)=>{
    connectDb();
    console.log(`running on ${port}`);
    
})