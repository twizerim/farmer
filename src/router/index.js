import express from "express"
import userRouter from "./userRouter"
import messagerouter from "./messagerouter"
import memberrouter from "./meberrouter"
import productrouter from "./productrouter"

const router=express.Router()
router.use("/user",userRouter)
router.use("/message",messagerouter)
router.use("/member",memberrouter)
router.use("/product",productrouter)
export default router