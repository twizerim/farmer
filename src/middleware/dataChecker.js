
import errormessage from "../utills/errormessage"
import User from "../modle/user"

class Datachecker{
    static userRegistIsEmpty(req,res,next){

        const {firstname,lastname,email,password,comfirmpassword}=req.body

        if(firstname==""){
            return errormessage(res,401,`please provide your first name`)
        }else if(lastname=""){
            return errormessage(res,401,`please provide your last name`)
        }else if(email==""){
            return errormessage(res,401,`please provide your email`)
        }else if(password=""){
            return errormessage(res,401,`please provide your password`)
        }else if(comfirmpassword){
            return errormessage(res,401,`please provide your confirm passsword`)
        }else {
            return next()
        }

    }

    static async emailExist(req,res,next){
        const email=req.body.email
        const user = await User.findOne({email})
        if(user){
            return errormessage(res,401,`user aleady exist`)
        }else{
            return next()
        }
    }
}

export default Datachecker