
import express from "express"
import messagecontroller from "../controller/messagecontroller"


const router = express.Router()
router.post("/",messagecontroller.sendmessage)
export default router