import express from "express"
import userRouter from "./userRouter"
import messagerouter from "./messagerouter"

const router=express.Router()
router.use("/user",userRouter)
router.use("/message",messagerouter)
export default router