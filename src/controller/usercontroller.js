import User from "../modle/user"
import errormessage from "../utills/errormessage"
import bcrypt from "bcrypt"
import successmessage from "../utills/successmessage"
import jwt from "jsonwebtoken"


class usercontroller{

    static async signup(req,res){
        const {firstname,lastname,email,password,confirmpassword,role}=req.body

        if(req.body.password !== req.body.confirmpassword){
            return errormessage(res,401,`password and confirm password is not match`)
        }

        const hashpassword=bcrypt.hashSync(req.body.password,10)
        const user=await User.create({firstname,lastname,email,password:hashpassword,confirmpassword,role})
        if(!user){
            return errormessage(res,401,`user not created`)
        }
        else{
           return successmessage(res,201,`user successfuly created`,user) 
        }
       
    }


    static async Login(req,res){
        const {email,password}=req.body
        const user = await User.findOne({email})
        if(!user){
            return errormessage(res,401,`invali email`)
        }else{
            const comparepassword = bcrypt.compareSync(password,user.password)
            if(!comparepassword){
                return errormessage(res,401,`invali password`)
            }else{
                const token=jwt.sign({user:user},process.env.SCRET_KEY,{expiresIn:"1d"})

                return res.status(201).json({
                    token:token,
                    data:{
                        user:user
                    }
                })
            }
        }
    }

    static async getAll(req,res){
        const user =await User.find()
        if(!user){
            return errormessage(res,40,`user not found`)
        }else{
            return successmessage(res,201,`All ${user.length} retrived`,user)
        }
    }

    static async getone(req,res){
        const id=req.params.id
        const user=await User.findById(id)
        if(!user){
            return errormessage(res,401,`no user found`)
        }else{
            return successmessage(res,201,`user on this id retrived`,user)
        }
    }

    static async deleteall(req,res){
        const user=await User.deleteMany()
        if(!user){
            return errormessage(res,401,`user not found in other account`) 
        }
        else{
            return successmessage(res,201,`all ${user} user successfuly deleted`)  
        }
        
    }

    static async updateuser(req,res){
        const id=req.params.id
        const user=await User.findByIdAndUpdate(id,req.body,{ new:true})
        if(!user){
            return errormessage(res,401,`no user found`)
        }
        else{
            return successmessage(res,201,`user succefuly updated`)
        }
    }


}
export default usercontroller