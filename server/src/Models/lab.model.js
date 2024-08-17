import {mongoose, Schema} from 'mongoose';

const labSchema=new Schema({
    labNo:{
        type:Number,
        required:true,
        unique:true,
    },
    devices:{
        type:[
            {
                deviceId:{
                    type:String,
                },
                deviceType:{
                    type:String,
                },
                status:{
                    type:Boolean,
                }
            }
        ]
    }
})

export const Lab = mongoose.model("Lab", labSchema);
