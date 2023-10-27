import usercontroller from "../controller/usercontroller"
import express from "express"

const router = express.Router()
router.post("/",usercontroller.signup)
export default router