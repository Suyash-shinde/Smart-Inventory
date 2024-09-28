import { Device } from "../Models/device.model.js";
import { Lab } from "../Models/lab.model.js";
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