import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated= async (req,res,next)=>{

    //we can access the token from the cookies
    const {token}=req.cookies;

    if(!token){
        return res.status(404).json({
            success: false,
            message: "login first"
        })
    }
    const decoded=jwt.verify(token,process.env.jwt_secret);
    req.user=await User.findById(decoded._id);

    next();
}