import jwt from "jsonwebtoken"
import { User } from "../Models/user.model.js";
import { Admin } from "../Models/admin.model.js";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!create admin jwt middleware later!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const verifyJwt=async(req, res, next)=>{
    try {
        const token = req.cookies?.accessToken || 
        req.header("Authorizaton")?.replace("Bearer ", "");
        if(!token){
            return res
            .status(401)
            .json({msg:"Unauthorised Request", status:false});
        }
        const decodedToken= jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        const admin = await Admin.findById(decodedToken?._id).select("-password -refreshToken")
        if(!user && !admin){
            return res
            .status(401)
            .json({msg:"Invalid Access Token", status:false});
        }
        if(user){
            req.user=user;
        }
        if(admin){
            req.user=admin;
        }
        next();

    } catch (error) {
        res.status(405).json({msg:"Invalid Token"});
    }
}

