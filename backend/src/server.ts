import dotenv from "dotenv";
dotenv.config();
import app from './app.ts';
import { connectDB } from "./config/db.ts";

let port = process.env.PORT

connectDB();

app.listen(port , ()=>{
    console.log(`server is runnig on port ${port}`)
})