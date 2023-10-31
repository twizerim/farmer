
import express from "express"
import membercontroller from "../controller/membercontroller"


const router =express.Router()
router.post("/",membercontroller.register)
router.post("/login",membercontroller.enter)

export default router