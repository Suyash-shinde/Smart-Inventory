import {mongoose, Schema} from 'mongoose';
import { User } from './user.model';
import { Lab } from './lab.model';

const issueSchema = new Schema({
    deviceId:{
        type:String,
    },
    deviceType:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,//true is the issue is resolved else false
    },
    date:{
        type:Date,
        required:true,
    },
    facultyName:{
        type: Schema.Types.ObjectId,
        ref:User,   
    },
    labNo:{
        type:Schema.Types.ObjectId,
        ref:Lab,
        required:true,
    },
    details:{
        type:String,
    }
    
});

export const Issue = mongoose.model("Issue", issueSchema);