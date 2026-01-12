import cmodel from '../models/ContactModel.js'

export const createContact = async (req, res) => {
    try {
        const data=req.body
        const contact=new cmodel(data)
        await contact.save()
        res.status(201).json({message:"Contact created successfully",contact})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getContacts=async (req,res)=>{
    try {
        const val=await cmodel.find();
        res.status(200).json({
            message:"item viewed",
            val
        })
    } catch (error) {
        console.log(error.message)
    }
}