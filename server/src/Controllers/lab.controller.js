import { Device } from "../Models/device.model.js";

export const addlab=async(req,res,next)=>{
    try{
        const {devices,labNo,row,column,incharge}=req.body;
        const addDevice = await Device.insertMany(devices);
        if(!addDevice){
            return res.json({
                msg:"Error updating devices",
                status:false,
            })
        }
        const addLab = await Lab.insertOne({labNo,row,column,incharge,devices});
        if(!addLab){
            return res.json({
                msg:"Error creating Lab",
                status:false,
            })
        }
        return res.json({
            msg:"New Lab/ClassRoom Created",
            status:true,
        })
    }catch(error){
        next(error);
    }
}