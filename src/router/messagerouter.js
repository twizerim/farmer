
import express from "express"
import messagecontroller from "../controller/messagecontroller"
import Verifyaccess from "../middleware/velifyaccess"


const router = express.Router()
router.post("/",messagecontroller.sendmessage)
router.get("/",Verifyaccess("admin"),messagecontroller.getallmessage)
export default router