const mysql = require('mysql')
const objectAssign = require('object-assign')
var contagem = 0
var arrUsers = []
let contador = 0
const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'backchallenge'
})
module.exports = {
    async getUser(req, res){
        const result = con.query("SELECT COUNT('id') AS contagem FROM users", function(err, res, field){
            if(err) throw err;
            contagem = res[0].contagem
        
        })
        const rows = con.query('SELECT * FROM users', async function(err, res, field){
            if(err) throw err;
            for(var i = 0; i < contagem; i++){
                const users = {
                    id: res[i].id,
                    name: res[i].name,
                    age: res[i].age,
                    apelido: res[i].apelido
                }
                 arrUsers.push(users)      
            }
        })
        await res.send({...arrUsers})
        
        
        arrUsers.splice(0, arrUsers.length)
        
    }
    
}

