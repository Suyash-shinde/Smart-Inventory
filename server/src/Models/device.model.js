import mongoose, {Schema} from 'mongoose';

const deviceSchema=new Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    labNo:{
        type:Schema.Types.ObjectId,
        ref:Lab,
    },
    type:{
        type:String,
    },
    status:{
        type:Boolean,
    },
    issues:{
        type:[
            {
                type: Schema.Types.ObjectId,
                ref:Issue
            }
        ]
    }
    
})

export const Device = mongoose.model("Device", deviceSchema);
