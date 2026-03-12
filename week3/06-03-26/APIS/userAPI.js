//create mini - express app(Seperate route)
import exp from 'express'
import {UserModel} from '../models/userModel.js'
import {hash,compare} from 'bcrypt'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
import { config } from 'dotenv'
config() // Load environment variables from .env file
const {sign} =jwt
export const userApp = exp.Router()

//DEFINE USER REST API Routes
//user login
userApp.post("/auth",async(req,res)=>{
   //get user cred obj from client
   const {email,password} = req.body;
   //verify email
   let user = await UserModel.findOne({email:email})
   //if email not existed
   if(user === null){
      return res.status(400).json({message:"Invalid email"})
   }
   //compare passwords(here cost factor is also given in hashing so we can know how many times it is hashed and compare)
   let result = await compare (password,user.password)
   //if passwords not matched
   if(result===false){
      return res.status(400).json({message:"Invalid password"})
   }
   // if password are matched
    //create token(jsonwebtoken -jwt --jaat)
    //arguments are payload(it determines token belongs to which user),secretkey,validitytime
    const signedToken = sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"1d"})//without quotes seconds with quotes milliseconds if we write d days & default 7w time like gmail,insta
      /*send token in res(here is no security)
    res.status(200).json({message:"login success",token:signedToken})*/
    //store token as httpOnly cookie
    res.cookie("token",signedToken,{
      httpOnly:true,
      sameSite:"lax",//here none is kept so csrf attack like fake links ,strict means only same domain can access,lax can send req to same domain and cookies are directed to navigation tabs
      secure:false//if it is true it will send to https means http secure protocol
    })
    //send res
    res.status(200).json({message:"login success",payload:user})
});
 //create new user
 userApp.post("/users",async(req,res)=>{
    //get new user obj from req
   
    const newUser = req.body;
    //hash the password(bcrypt.js module is used to hash & comparision)
    const hashedPassword = await hash(newUser.password,10)//here 10 is cost factor means how many times the password is hashed
    //replace the plain password with hashed password
    newUser.password = hashedPassword;
    //create a new user document
    const newUserDocument = new UserModel(newUser)
    //save
    const result = await newUserDocument.save()
    console.log("result:",result)
    //send res
    res.status(201).json({message:"user created"})//201 is status code
 }
);
//read all users
userApp.get("/users",async(req,res)=>{
   //read all users from db
   let usersList = await UserModel.find();
   //send res
   res.status(200).json({message:"users",payload:usersList})
   //read a user by objectid
   userApp.get("/user",verifyToken,async(req,res)=>{
      //read user email from req
      const emailofUser = req.user?.email;
      //console.log(emailofUser);
      //read object id from req params
   
      //find user by id
      const userObj = await UserModel.findOne({email:emailofUser}).populate("cart.product");//populate("cart.reference used")
      //if user not found
      if(!userObj){//here return keyword is written if user not found it is returning the res and existing from the route
         return res.status(404).json({message:"user not found"})
      }
      //send fres
      res.status(200).json({message:"user",payload:userObj})
   })
})
//update user by id
userApp.put("/users/:id",verifyToken,async(req,res)=>{
   //get modified user from req
   const modifiedUser = req.body;
   const uid = req.params.id;
   //find user by id and update 
   ////here to run the validation during updation also we write this 
   const updatedUser = await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true});
   
   if(!updatedUser){
return res.status(404).json({message:"user not found"})
   }
   //send res
   res.status(200).json({message:"updateduser",payload:updatedUser})
})
//delete user by id
userApp.delete("/users/:id",async(req,res)=>{
   //get id from req params
   let uid = req.params.id;
    //find user by id and delte
   let  deletedUser = await UserModel.findByIdAndDelete(uid);
   if(!deletedUser){
       return res.status(404).json({message:"user not found"})
   }
   //send res
   res.status(200).json({message:"deleteduser",payload:deletedUser})
})
//add product to cart
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
   //get product id from url param
   let productId = req.params.pid;
   //get current user detail
   const emailofUser = req.user?.email;
  
   //add product to cart
   let result = await UserModel.findOneAndUpdate({email:emailofUser},{$push:{cart:{product:productId}}})
   //if user invalid
   if(!result){
      return res.status(404).json({message:"user not found"});
   }
   res.status(200).json({message:"product added to cart"})

})