
import Message from "../modle/message";
import errormessage from "../utills/errormessage";
import successmessage from "../utills/successmessage";

class messagecontroller{
    static async sendmessage(req,res){
        const {names,email,age,message}=req.body
        if(age<21){
            return errormessage(res,401,`message not sent`)
        }else{
            const messag = await Message.create({names,email,age,message})
            return successmessage(res,201,`mesage sent`,messag)
        }
    }
     static async getallmessage(req,res){
        const messag = await Message.find()
        if(!messag){
            return errormessage(res,401,`no message found`)
        }else{
            return successmessage(res,201,`All ${messag.length} found read it please`,messag)
        }
     }
}
export default messagecontroller