import asyncHandler from '../Middlewares/asyncHandler.js';
import { Device } from '../Models/device.model.js';
import { Issue } from '../Models/issue.model.js';

 //@desc Adding issue to db
 //@route /api/issue
 //@access public
export const createIssue =  async (req,res,next) => {
    try {
        //const {deviceId,deviceType,date,facultyName,facultyLabIncharge,details} =req.body;
        const {deviceId,deviceType,date,facultyLabIncharge,details,labNo} =req.body;
        if(!deviceId|| !deviceType|| !date||!facultyLabIncharge||!details){
            return res.json({
                status:false,
                msg:"Please fill all details completely"
            })
        }
        const addIssue= await Issue.create({
            deviceId,
            deviceType,
            date,
            //facultyName,
            status:"pending",
            facultyLabIncharge,
            details,
            labNo
        })
        if(!addIssue){
            return res.json({
                status:false,
                msg:"Error in creating a new Issue"
            })
        }
        const findDevice = await Device.findOne({id:deviceId});
        if(!findDevice){
            return res.json({
                status:false,
                msg:"error updating the data"
            })
        }
        findDevice.status=false;
        await findDevice.save({validateBeforeSave:false});
        return res.json({
            status:true,
            msg:"Added issue to db"
        })
    } catch (error) {
         next(error);
        
    }
};


//@desc Sending existing issues to frontend
 //@route /api/issue
 //@access public

 export const getIssue = async (req,res,next) => {
        try {
            const issue= await Issue.find({});
            return res.send(issue);
        } catch (error) {
            next(error)
        }
 }


 //@desc Send a specific issue to frontend form page
 //@ route /api/issue/id
 //

 export const getIssueId = async (req,res,next) =>{
    try {
        const {id}=req.body;
        if(!id)
        {
            return res.json({
                status:false,
                msg:"No id sent"
            })
        }
        const findIssue= await Issue.findOne({deviceId:id});
        if(!findIssue){
            return res.json({
                status:false,
                msg:"Isue not open"
            });
        }
        else{
            return res.json({
                status:true,
                msg:"Data related to Issue sent",
                data:findIssue,
            })
        }
    } catch (error) {
        console.error("Error fetching issue:", error);
    return res.status(500).json({
      status: false,
      msg: "Server error",
    });

    }
 }