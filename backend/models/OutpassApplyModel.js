import mongoose from 'mongoose'

const ApplyModel=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    regno:{
        type:Number,
        required:true
    },
    email:{
       type:String,
       required:true
    },
    mobileno:{
        type:Number,
        required:true
    },
    fromDate:{
        type:String,
        required:true
    },
    toDate:{
        type:String,
        required:true
    },
    hostelName:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    
},{
    timestamps:true
})

const model=mongoose.model('outpass',ApplyModel)

export default model;