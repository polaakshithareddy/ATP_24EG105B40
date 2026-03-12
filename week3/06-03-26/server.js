//Create express app
import exp from 'express'
import {connect} from 'mongoose'
import {userApp} from "./APIS/userAPI.js"
import { productApp } from './APIS/productAPI.js';
import cookieParser from 'cookie-parser';
import {config} from 'dotenv'
config() // Load environment variables from .env file
const app = exp();
//add body parser middleware
app.use(exp.json())
app.use(cookieParser())
app.use('/user-api',userApp)
app.use('/product-api',productApp)
//connect to DB server
async function connectDB() 
{
    try{
        await connect(process.env.DB_URL);//(after localhost put "/databasename" if database not there it will create a new one)
        console.log("db connection success");
        //start server
        const port = process.env.PORT || 4000;
app.listen(port,()=>console.log(`server on port ${port}`))
    }catch (err){
        console.log("err in db collection : ",err);
    }
}
connectDB();
//error handling middleware
/*app.use((err,req,res,next)=>{
res.json({message:"error occured",error:err.message})*/
app.use((err,req,res,next)=>{
    console.log(err.name);
//validation Error
if(err.name === "ValidationError"){
    return res.status(400).json({message:"error occured",error:err.message});
}
if(err.name === "CastError"){
    return res.status(400).json({message:"error occured",error:err.message});
}
//send server side error
 res.status(500).json({message:"error occured",error:err.message});
})
//errorobj has =>{name,message,callstack}