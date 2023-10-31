import usercontroller from "../controller/usercontroller"
import express from "express"
import Verifyaccess from "../middleware/velifyaccess"

const router = express.Router()
router.post("/",usercontroller.signup)
router.delete("/",usercontroller.deleteall)
router.post("/login",usercontroller.Login)
router.get("/",Verifyaccess("admin"),usercontroller.getAll)
export default router