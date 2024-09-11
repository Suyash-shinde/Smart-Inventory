import mongoose, {Schema} from 'mongoose';

const labSchema=new Schema({
    labNo:{
        type:Number,
        required:true,
        unique:true,
    },
    incharge:{
        type:String,
    }
    
})

export const Lab = mongoose.model("Lab", labSchema);
