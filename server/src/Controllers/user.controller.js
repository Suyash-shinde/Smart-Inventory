import { User } from "../Models/user.model.js";
import jwt from "jsonwebtoken"
const generateAccessAndRefreshTokens = async(userId)=>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.genereateAccessTokens()
        const refreshToken = user.genereateRefreshTokens()
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken};

    } catch (error) {
        console.log(error);     
        return error;
    }
}
const options={
    // httpOnly:true,
    secure:true,
} 
export const register=async(req,res,next)=>{
    try {
        const {name,prn,email,password} = req.body;
        if(!name || !prn || !email || !password){
            return res.json({
                status:false,
                msg:"Fill all the required fields."
            }); 
        }
        const findUser = await User.findOne({prn});
        if(findUser){
            return res.json({
                status:false,
                msg:"User with this prn already exists",
            });
        }
        const createUser= await User.create({
            name,
            prn,
            email,
            password,
        });
        if(!createUser){
            return res.json({
                status:false,
                msg:"Error creating new user please try again."
            })
        }   
        const findId= await User.findOne({prn});
        const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(findId._id);
        const sendUser = { 
            name,
            prn,
            email,
        };
        return res
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            status:true,
            msg:"User registered Sucessfully",
            user:sendUser,      
        }); 
    } catch (error) {
        next(error);
    }
}

export const login=async(req,res,next)=>{
    try {
        const {prn , password} = req.body;
        if(!prn || !password){
            return res.json({
                status:false,
                msg:"Fill all fields",
            })
        } 
        const findUser = await User.findOne({prn});
        if(!findUser){
            return res.json({
                status:false,
                msg:"Invalid  prn",
            });
        }
        const sendUser = { 
            name:findUser.name,
            prn:findUser.prn,
            email:findUser.email,
        };
        const {accessToken,refreshToken} = await generateAccessAndRefreshTokens(findUser._id);
        return res
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            status:true,
            msg:"Logged in sucessfully",
            user:sendUser,
            accessToken:accessToken,
            refreshToken:refreshToken,          
        });
    } catch (error) {
        next(error);
    }
}

export const refreshAccessToken=async(req,res,next)=>{
    console.log("At refresh token");
    
    const incomingRefreshToken= await req.cookies?.refreshToken;
    if(!incomingRefreshToken){
        return res.json({msg:"Unauthorised request", status:false});
    }
    try {
        const decodedToken=  jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET);
        const findUser= await User.findById(decodedToken?._id);
        if(!findUser){
            return res.json({msg:"Invalid Refresh Token", status:false});
        }
        if(incomingRefreshToken!==findUser.refreshToken){
            return res.json({msg:"Login Expired", status:false});
        }
        const accessToken= findUser.genereateAccessTokens();
        const refreshToken= findUser.genereateRefreshTokens();
        findUser.refreshToken = refreshToken
        await findUser.save({ validateBeforeSave: false })
        const options={
            httpOnly:true,
            secure:true,
        }
        console.log("Access token refreshed");          
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            msg:"Access Token Refreshed",
        })
    } catch (error) {
        next(error);
    }
}


