//create HTTP server
import exp from 'express'
const app = exp();
import { userApp } from './API/UserAPI.js';
import { productApp } from './API/ProductApi.js';

//use body parser middleware(if it is not used then it will give undefined of the body of request)
// used to extract body of the post and put request
app.use(exp.json())//in-built middleware
//create custom middleware
function middleware1(req,res,next){
  //send res from middleware
  //res.json({message : "this res from middleware"})
  //forward req to next
  console.log("middleware1 executed");
  next();
}
function middleware2(req,res,next){
  //send res from middleware
  //res.json({message : "this res from middleware"})
  //forward req to next
  console.log("middleware2 executed");
  next();// it executes next middleware or the route present next
}

// use middleware
app.use(middleware1);
app.use(middleware2);
//forward request to userApi if path
app.use("/user-api",userApp);
/forward request to productApi if path starts with /product-api
app.use("/product-api",productApp);
//set a port number
const port = 3000;
// assign port number to Http Server
app.listen(port,()=>console.log(`server listening to port ${port}...`));


 