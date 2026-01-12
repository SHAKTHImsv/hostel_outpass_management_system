import express from 'express'
const app=express()
import cors from 'cors'
import db from './config/db.js'
import router from './router/OutpassRouter.js'
import rrr from './router/ContactRouter.js'

app.use(cors())
app.use(express.json())
app.use("/",router)
app.use("/",rrr)



app.listen(3000,()=>{
  console.log("server connected")
});
