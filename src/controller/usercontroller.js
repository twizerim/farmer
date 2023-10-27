import User from "../modle/user"
class usercontroller{

    static async signup(req,res){
        const user=await User.create(req.body)
        console.log(user)
    }

}
export default usercontroller