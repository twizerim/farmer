
import express from "express"
import productcontroller from "../controller/productcontroller"

const router = express.Router()
router.post("/",productcontroller.postproduct)
export default router