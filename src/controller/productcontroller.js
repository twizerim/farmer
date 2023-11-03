
import Product from "../modle/product";
import errormessage from "../utills/errormessage";
import successmessage from "../utills/successmessage";

class productcontroller{
    static async postproduct(req,res){
        const product = await Product.create(req.body)
        if(!product){
            return errormessage(res,401,`product not created`)
        }
        else{
            return successmessage(res,401,`product successfuly posted`,product)
        }
    }

    static async getallproduct(req,res){
        const product=await Product.find()
        if(!product){
            return errormessage(res,401,`product not found`)
        }else{
            return successmessage(res,201,`all ${product.length} retrived`,product)
        }
    }
}
export default productcontroller