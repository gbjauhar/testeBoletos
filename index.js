import express from "express"
import pkg from "@prisma/client"
import dotenv from "dotenv"
import { Router } from "express"
const { PrismaClient } = pkg
const prisma = new PrismaClient()


const app = express()
dotenv.config()
app.use(express.json());
const router = Router()
router.get("/info", getInfo)
app.use(router)



async function getInfo(req, res) {
    try {
        const { user_id, owner_id } = req.query
        if (!user_id || !owner_id) {
            return res.sendStatus(404)
        }
        const user = await prisma.users.findFirst({ where: { id: Number(user_id) } })
        const owner = await prisma.owner.findFirst({ where: { id: Number(owner_id) } })
        return res.send({ user, owner })
    } catch (err) {
        console.log(err)
        return res.send(err)
    }
}

const port = process.env.PORT || 4000
app.listen(port, () =>
    console.log(`Server running in port: ${port}`)
);