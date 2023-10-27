import mongoose from "mongoose";

const userschemas=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})
const User =mongoose.model("User",userschemas)
export default User