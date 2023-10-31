import express from "express"
import userRouter from "./userRouter"
import messagerouter from "./messagerouter"
import memberrouter from "./meberrouter"

const router=express.Router()
router.use("/user",userRouter)
router.use("/message",messagerouter)
router.use("/member",memberrouter)
export default router