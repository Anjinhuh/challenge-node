var http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000


const db = require('../api/principal')
const path = require('path')
app.use(require("cors")())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// NECESSITA DE ADICIONAR DEV E COLOCAR PARA VER MAIS

 
app.get('/', async (req, res) =>{
    res.send('developed by: Anjinhu#9902')
})
app.get('/api/users', async (req, res) => {
   await db.getUser(req, res)
})
app.get('/api/users/create/:id/:user/:age/:apelido', async (req, res) => {
    console.log(req.params)
    let id = req.params.id
    let name = req.params.user
    let age = req.params.age
    let apelido = req.params.apelido

    db.createUser(id, name, age, apelido, req, res)
})

app.listen(port, () =>{
        console.info(`Aplicação rodando na porta ${port}!`)
});
console.log("Servidor escutando na porta "+ port +"...")