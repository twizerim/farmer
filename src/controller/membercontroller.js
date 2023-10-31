
import Member from "../modle/Member"
import errormessage from "../utills/errormessage"
import bcrypt from "bcrypt"
import successmessage from "../utills/successmessage"
import jwt from "jsonwebtoken"


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

    static async enter(req,res){
        const {email,yourpassword}=req.body
        const member = await Member.findOne({email})
        if(!member){
            return errormessage(res,401,`invalid email`)
        }else{
            const comparepassword=bcrypt.compareSync(yourpassword,member.yourpassword)
            if(!comparepassword){
                return errormessage(res,401,`invalid password`)
            }else{
                const token=jwt.sign({member:member},process.env.SCRET_KEY,{expiresIn:"1d"})
                return res.status(201).json({
                    token:token,
                    data:{
                        member:member
                    }
                })
            }
        }
    }
}
export default membercontroller