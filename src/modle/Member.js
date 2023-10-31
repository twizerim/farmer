
import mongoose from "mongoose";


const memberschemas = new mongoose.Schema({
    names:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    nationalId:{
        type:Number,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    yourSkills:{
        type:String,
        required:true
    },
    yourpassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["member","admin"],
        default:"member"
    },
    registAt:{
        type:Date,
        default:new Date(Date.now())
    }
})
const Member=mongoose.model("Member",memberschemas)
export default Member