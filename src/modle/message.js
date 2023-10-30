
import mongoose from "mongoose";

const messageshemas = new mongoose.Schema({
    names:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    sendAt:{
        type:Date,
        default:new Date(Date.now)
    }

})
const Message = mongoose.model("Message",messageshemas)
export default Message