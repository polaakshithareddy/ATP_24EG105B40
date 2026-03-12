 //create mini-express route
import exp from 'express'
import { productModel } from '../models/productModel.js'
import{hash} from 'bcrypt'
export const productApp = exp.Router()
//Define user rest api routes
 //create new product
 productApp.post("/products",async(req,res)=>{
    //get new product obj from req
    const newProduct = req.body;
   
    //create a new product document
    const newProductDocument = new productModel(newProduct)
    //save
    const result = await newProductDocument.save()
    //show res
    //console.log(result)
    //send res
    res.status(201).json({message:"product created"})//201 is status code
 }
);
//read all products
productApp.get("/products",async(req,res)=>{
   //here since usermodel represents collection we call the find method on it
   let productsList = await productModel.find();
   //send res
   res.status(200).json({message:"products",payload:productsList})
   //read a product by productid
   productApp.get("/products/:productId",async(req,res)=>{
      //read object id from req params
      let pid = req.params.productId
      //find product  by id
      let productObj = await productModel.findOne({productId:pid});
      
      //send res
      res.status(200).json({message:"product",payload:productObj})
   })
})
//update product by id
productApp.put("/products/:productId",async(req,res)=>{
   //get modified user from req
   
   let pid = req.params.productId;
   let  modifiedProduct = req.body;
   let result = await productModel.updateOne({productId:pid},{$set:modifiedProduct},{new:true,runValidators:true})
   //send res
   res.status(200).json({message:"updatedproduct"})
})
//delete user by id
productApp.delete("/products/:productId",async(req,res)=>{
   let pid = req.params.productId
   let result = await productModel.deleteOne({productId:pid})
  
   //send res
   res.status(200).json({message:"deletedproduct"})
})

 