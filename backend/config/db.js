import mongoose from 'mongoose'

const db=mongoose.connect('mongodb://localhost:27017/outpass_management').then(()=>{
    console.log("Db connected")
})

export default db