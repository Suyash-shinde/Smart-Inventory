import { Device } from "../Models/device.model.js";

import { Lab } from "../Models/lab.model.js";

export const addlab=async(req,res,next)=>{
    try{
        const {devices,labNo,row,column,incharge}=req.body;
        const addDevice = await Device.insertMany(devices);
        console.log(devices);
        if(!addDevice){
            return res.json({
                msg:"Error updating devices",
                status:false,
            })
        }
        console.log(devices);
        const devicePromises = devices.map(async (device) => {
            const findDevice = await Device.findOne({ id: device.id });
            return findDevice ? findDevice._id : null;
        });
    
        const labDevices = await Promise.all(devicePromises);
    

        const validLabDevices = labDevices.filter((deviceId) => deviceId !== null);
    
        const addLab = await Lab.create({labNo,row,column,incharge,devices:validLabDevices});
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

export const getLabData =async(req,res,next)=>{
    try{
        const {labNo} = req.body;
        const getLab = await Lab.findOne({labNo}).populate('devices').exec();
        if(!getLab){    
            return res.json({
                msg:"Error fetching lab data",
                status:false,
            })
        }
        console.log("rewq")
        return res.json({
            msg:"Lab data fetched successfully",
            status:true,
            data:getLab
        })
    }catch(error){
        next(error);
    }
}