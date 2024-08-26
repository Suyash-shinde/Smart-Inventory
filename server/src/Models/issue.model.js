import mongoose, {Schema} from 'mongoose';
import { User } from './user.model.js';
import { Lab } from './lab.model.js';

const issueSchema = new Schema({
    deviceId:{
        type:String,
    },
    deviceType:{
        type:String,
        required:true,
    },
    status:{
        type:String,//true is the issue is resolved else false
    },
    date:{
        type:Date,
        required:true,
    },
    facultyName:{
        type: Schema.Types.ObjectId,
        ref:User,   
    },
    facultyLabIncharge:{
        type:String,
        required:true,
    },
    details:{
        type:String,
    }
    
});

export const Issue = mongoose.model("Issue", issueSchema);