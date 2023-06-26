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
    res.status(201).send("ok")
}) 


app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body

    if(!username || !tweet){
        res.status(400).send("UNAUTHORIZED")
        return
    }

    tweets.push({username,tweet})
    res.status(200).send("ok")
})

app.get("/tweets", (req, res) => {

    const unity = [];

    for(let i=0; i<tweets.length; i++){
        for(let j=0; j<users.length; j++){
            if(users[j].username === tweets [i].username){
                unity.push({username:users[j].username, avatar:users[j].avatar, tweet:tweets[i].tweet})
            }
        }
    }

    const reverse_unity = unity.reverse()

    res.status(200).send(reverse_unity.slice(0,10))

})

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))