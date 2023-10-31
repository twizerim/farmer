
import express from "express"
import membercontroller from "../controller/membercontroller"


const router =express.Router()
router.post("/",membercontroller.register)

export default router