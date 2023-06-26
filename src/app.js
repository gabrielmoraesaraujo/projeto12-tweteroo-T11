import express from "express"
import cors from "cors"

const app = express ()
app.use(cors())
app.use(express())

const users = [];
const tweets = [];

app.post("/sing-up", (req, res) => {
    const{username, avatar} = req.body

    if(!username || !avatar){
        res.status(400).send("Entre com um nome de usuario valido")
        return
    }

    users.push({username, avatar})
    res.status(200).send("ok")
}) 