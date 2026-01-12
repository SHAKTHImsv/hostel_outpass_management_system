import ApplyModel from "../models/OutpassApplyModel.js";


export const ApplyPass=async (req,res)=>{
    try {
        const data=req.body
    const addaTask=await ApplyModel(data)
    const save=await addaTask.save()
    res.status(200).json(save)
    } catch (error) {
        console.log(error.message)
        
    }
}

export const getall=async (req,res)=>{
    try {
        const data=await ApplyModel.find();
        res.status(200).json(data)
    } catch (error) {
        console.log(error.message)
    }
}


export const getapassbyid=async (req,res)=>{
    try {
        const data=await ApplyModel.findById(req.params.id);
        res.status(200).json(data)
    } catch (error) {
        console.log(error.message)
    }
}


export const deletepass=async (req,res) =>{
    try {
        await ApplyModel.findByIdAndDelete(req.params.id)
        res.sendStatus(204);
    } catch (error) {
        console.log(error.message);
    }
}