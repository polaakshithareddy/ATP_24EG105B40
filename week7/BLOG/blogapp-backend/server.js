import exp from 'express'
import {config} from 'dotenv'
import {connect} from 'mongoose'
import {userApp} from './API/userApi.js'
import {articleApp} from './API/articleApi.js'
import {adminApp} from './API/adminApi.js'
import {authorApp} from './API/authorApi.js'
import {commonApp} from './API/commonApi.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
config();
//create express app
const app = exp()
//enable cors
app.use(cors({
    origin: 'http://localhost:5174,https://atp-24eg105b40.onrender.com', // force explicitly to 5174
    credentials:true,//token is sent
}))

//body parser middleware
app.use(exp.json())
//cookie parser middleware
app.use(cookieParser())
//path routing middleware
app.use("/user-api",userApp)
app.use("/article-api",articleApp)
app.use("/author-api",authorApp)
app.use("/auth",commonApp)
app.use("/admin-api",adminApp)
//connect to db
const connectDB = async () => {
    try {
        await connect(process.env.DB_URL);
        console.log("Db server connected");
    
        //assign port
        const port = process.env.PORT || 5000//5000 is fallback port no
        app.listen(port,()=>console.log(`server listening on port ${port}`))
    } catch(err){
        console.log("error in db connect",err)
    }
}
connectDB();


        //to handle invalid path
        app.use((req,res,next)=>{
            console.log(req.url)
            res.status(404).json({message:`path ${req.url} is invalid`})
        })
        //to handle server error
        app.use((err,req,res,next)=>{
    console.log(err.name);
//validation Error
if(err.name === "ValidationError"){
    return res.status(400).json({message:"error occured",error:err.message});
}
if(err.name === "CastError"){
    return res.status(400).json({message:"error occured",error:err.message});
}
const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }
//send server side error
 res.status(500).json({message:"error occured",error:err.message});
})
//errorobj has =>{name,message,callstack}
        
