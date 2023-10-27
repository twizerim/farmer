
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import router from "./router"


dotenv.config()
const farmer=express()
farmer.use(bodyParser.json())
farmer.use("/rice",router)

const port=process.env.PORT
const db=process.env.DATABASE

farmer.listen(port,()=>{
    console.log(`port running on ${port}`)
})

mongoose.connect(db).then(()=>{
    console.log(`database successfuly connected`)
}).catch((err)=>{
    console.log(`error is: ${err}`)
})

export default farmer