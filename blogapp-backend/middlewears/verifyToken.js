import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
const {verify} = jwt//verify function throws error if token is invalid or expired
config();
//verifytoken will return the middleware and it takes arguments as allowed roles and validate token
export const verifyToken = (...allowedRoles) => {
    return async (req,res,next)=>{
        try{        
            //get token from cookie
            const token = req.cookies?.token//{token :atfdfg - here in commonapi.js we are taking variable as token }   
            //check token existed or not
            if(!token){
                return res.status(401).json({message:"pls login first"})
            }   
            //validate token(decode the token)
            let decodedToken= verify(token,process.env.SECRET_KEY);
            //check the role is same as role in decoded token
            if(!allowedRoles.includes(decodedToken.role)){
                return res.status(403).json({message:"you are not authorized "})
            }
            //add decoded token
            req.user = decodedToken;
            next();
        }catch(err){
            return res.status(401).json({message:"Invalid token"})
        }
    }
}

