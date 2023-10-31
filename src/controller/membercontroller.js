
import Member from "../modle/Member"
import errormessage from "../utills/errormessage"
import bcrypt from "bcrypt"
import successmessage from "../utills/successmessage"
// import jwt from "jsonwebtoken"


class membercontroller{

    static async register(req,res){
        const {names,email,nationalId,nationality,location,role,yourSkills,yourpassword}=req.body

        
        const hashpassword=bcrypt.hashSync(req.body.yourpassword,10)
        const member=await Member.create({names,email,nationalId,nationality,location,role,yourSkills,yourpassword:hashpassword})
        if(!member){
            return errormessage(res,401,`member not registed`)
        }
        else{
           return successmessage(res,201,`member successfuly registed`,member) 
        }
       
    }
}
export default membercontroller