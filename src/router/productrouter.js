
import express from "express"
import productcontroller from "../controller/productcontroller"
import Verifyaccess from "../middleware/velifyaccess"

const router = express.Router()
router.post("/",Verifyaccess("admin"),productcontroller.postproduct)
export default router