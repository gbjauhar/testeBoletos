import { Router } from "express"
import getInfo from "./controller.js"


const router = Router()


router.get("/", getInfo)


export default router