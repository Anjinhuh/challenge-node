const fetch = require('node-fetch')
fetch('http://localhost:3000/api/users').then(x =>{
    return x.json()
}).then(ok =>{
    console.log(ok)
})