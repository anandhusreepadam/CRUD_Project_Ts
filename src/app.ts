import express from "express";
import path from "path";
import router from "./routes/productRoute";
import connectDB from "./config/db";

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
connectDB();
app.use('/',router);


app.listen(3002,()=>{
    console.log('Server Running on PORT 3002');    
})