import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {hash,compare} from 'bcrypt'
import jwt from 'jsonwebtoken'
import { verifyToken }from '../middlewears/verifyToken.js'
const {sign} = jwt
export const commonApp = exp.Router()

//ROUTE FOR REGISTRATION
commonApp.post("/register",async (req,res)=>{
    let allowedRoles = ["USER","AUTHOR"]//we are writing here bcoz admin cannot register directly admin should be made no need to hash if there is no proper role so this code written before hashing
    //get user from req
    const newUser = req.body
    //check role - only author and user can register{we are writing here bcoz admin cannot register directly admin should be made no need to hash if there is no proper role so this code written before hashing}
   if(!allowedRoles.includes(newUser.role)){
    return res.status(400).json({message:"Invalid role"})
   }
   //run validators manually
   
    //hash password and replace plain password with hashed password
    newUser.password = await hash(newUser.password,12)
    //create newUser document
    const newUserDoc = new UserModel(newUser)
    //save document-validators will only work when we are saving the document and during update validators will not work so we are saving the document here and we need to explicitly mention runValidators:true
    await newUserDoc.save()
    //send response
    res.status(201).json({message:"User created"})
})
//ROUTE FOR LOGIN(AUTHOR,USER)
//here after the submission of credetials we get the token-login
commonApp.post("/login",async (req,res)=>{
    //get user credentials object from req
    const {email,password} = req.body;
    //find user by email
    const user = await UserModel.findOne({email:email});
    //if user not found
    if(!user){
        return res.status(400).json({message:"Invalid email "})
    }
    //compare password
    const isMatched = await compare(password,user.password)
    //if password not matched
    if(!isMatched){
        return res.status(400).json({message:"Invalid password"})
    }
    //create jwt token
    const signedToken = sign({id:user._id,email:email,role:user.role},process.env.SECRET_KEY,{expiresIn:"1h"});
    //set token to res header as http only cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"});
    //remove password from user document
    let userObj = user.toObject();
    delete userObj.password;
    //send response with user details except password
    res.status(200).json({message:"Login successful",payload:userObj})
})
//ROUTE FOR LOGOUT
commonApp.get("/logout",(req,res)=>{
    //clear token from cookie storage
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    });
    //send response
    res.status(200).json({message:"Logout successful"})
});

//CHANGE PASSWORD
commonApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async (req,res)=>{
    //check current paassword and new password are same
      const {currentPassword,newPassword} = req.body;
    if(currentPassword === newPassword){
        return res.status(400).json({message:"Current password and new password cannot be same"})
    }
    //get current password of user/admin/author

    const existingPassword = req.body.password;

    //check the current password of req and user are not same
   /* const isMatched = await compare(currentPassword,user.password)
    if(!isMatched){
        return res.status(400).json({message:"Invalid current password"})
    }
    //hash new password 
    const hashedNewPassword = await hash(newPassword,12)
    //replace the current password of user with hashed new password
    user.password = hashedNewPassword;
    //save 
    await user.save();
    //send response 
    res.status(200).json({message:"password changed successfully"})*/
});
