export async function getInfo(req, res) {
    try {
        /* const { user_id, owner_id } = req.query
        const user = await prisma.users.findFirst({ where: { id: user_id } })
        const owner = await prisma.owner.findFirst({ where: { id: owner_id } }) */
        console.log("oi")
        return res.send("oi")
    } catch (err) {
        console.log(err)
        return res.send(err)
    }
}
