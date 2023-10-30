import usercontroller from "../controller/usercontroller"
import express from "express"

const router = express.Router()
router.post("/",usercontroller.signup)
router.delete("/",usercontroller.deleteall)
router.post("/login",usercontroller.Login)
export default router