//createmini-express app(seperate route)
import exp from 'express'
export const userApp = exp.Router() 
//test data
let users=[];

//create API(REST API- REpresentational state transfer)
 // route to handle GET req of client(http://localhost:3000/users)
 userApp.get('/users',(req,res)=>{
    /*send res to client
    res.json({message:"this res for get users req"})
 })*/
res.json({message : "all users",payload:users})})
 // route to handle POST req of client
userApp.post('/users',(req,res)=>{
    /*send res to client
    res.json({message:"this res for post req"})
 })*/
//get user from the client
const newUser = req.body
//push user into users
users.push(newUser)
//send res
res.json({message:"user created"})
 })
 //route to handle PUT request of client
 userApp.put('/users',(req,res)=>{
    /*send res to client
    res.json({message:"this res for put req"})
 })*/
//get modified user from client{}
let modifiedUser = req.body;
//get index of existing user in users array
let index = users.findIndex(userobj=>userobj.id===modifiedUser.id)
  //user not found
  if(index===-1){
   return res.json({message : "user not found"})
  }
//update user with index
users.splice(index,1,modifiedUser)
//send res
res.json({message:"user updated"})
 })
 // route to handle Delete request of client
 userApp.delete('/users/:id',(req,res)=>{
    /*send res to client
    res.json({message:"this res for delete req"})*/
    //get id of user from url parameter
    let idOfUrl = Number(req.params.id)
    //find index of user
    let index = users.findIndex(userobj=>userobj.id===idOfUrl)
    //if user not found
    if(index===-1){
      return res.json({message:"user not found"})
    }
    //delete user by index
    users.splice(index,1)
    //send response
    res.json({message:"user deleted"})
 })
 //route to handle GET to read specific user
 userApp.get('/users/:id',(req,res)=>{
   //get user if from url param
   let idOfUrl = Number(req.params.id)
   //find user
   let user = users.find(userobj=>userobj.id===idOfUrl)
   if(user===undefined){
      res.json({message:"user not found"})
   }
   //send res
   res.json({message:"a user",payload:user})
 })