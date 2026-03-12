//app.use(verifytoken)-this executes middlewear for all requests 
import jwt from 'jsonwebtoken'
const {verify} = jwt;
export function verifyToken(req,res,next){
    //token verification logic
    const token = req.cookies?.token;
    //if req from unauthorized user
    if(!token){
        return res.status(401).json({message:"plz login"})
    }
    //here it is just  middlewear so writing try & catch if routes there express will handle error
    try{
    //if token is existed
   const decodedToken = verify(token,'abcdefg')//verify method returns erroe when user is unauthorized
   console.log(decodedToken);
   //call next
   next();
    }catch(err){
        //401-unauthorized
res.status(401).json({message:"session expired.plz relogin"})
    }
}