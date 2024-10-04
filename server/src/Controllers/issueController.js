import asyncHandler from '../Middlewares/asyncHandler.js';
import { Device } from '../Models/device.model.js';
import { Issue } from '../Models/issue.model.js';
import { User } from '../Models/user.model.js';

 //@desc Adding issue to db
 //@route /api/issue
 //@access public
export const createIssue =  async (req,res,next) => {
    try {
        console.log("absdf")
        //const {deviceId,deviceType,date,facultyName,facultyLabIncharge,details} =req.body;
        const {deviceId,deviceType,date,facultyLabIncharge,details,labNo, facultyName} =req.body;
        if(!deviceId|| !deviceType|| !date||!facultyLabIncharge||!details){
            return res.json({
                status:false,
                msg:"Please fill all details completely"
            })
        }
    
        const findUser = await User.findOne({name:facultyName});
        if(!findUser){
            console.log("error")
            return res.json({
                status:false,
                msg:"Error fetching data"
            })
        }
        const addIssue= await Issue.create({
            deviceId,
            deviceType,
            date,
            facultyName:findUser._id,
            status:"Pending",
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
        console.log(findDevice);
        findDevice.status=false;
        findDevice.issues.push(addIssue._id);
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

 export const getUserIssue=async(req,res,next)=>{
    try{
        const {name} = req.body;
        const findUser = await User.findOne({name:name});
        if(!findUser){
            return res.json({
                status:false,
                msg:"Error fetching data"
            })
        }
        const issues = await Issue.find({facultyName:findUser._id});
        if(!issues){
            return res.json({
                status:false,
                msg:"Error fetching data"
            })
        }
        return res.json({
            status:true,
            msg:"Data fetched successfully",
            issues,
        })
    }catch(error){
        next(error);
    }
 }

 export const handleIssue=async(req,res,next)=>{
    const {issueID, deviceId}=req.body;
    const findIssue = await Issue.findById(issueID);
    if(!findIssue){
        return res.json({
            status:false,
            msg:"Error finding issue",
        })
    }
    findIssue.status="Completed";
    await findIssue.save({validateBeforeSave:false});
    const findDevice = await Device.findOne({id:deviceId});
    if(!findDevice){
        return res.json({
            msg:"Error finding device",
            status:false,
        })
    }
    findDevice.status=true;
    await findDevice.save({validateBeforeSave:false});
    return res.json({
        status:true,
        msg:"Issue marked as resolved"
    })
 }