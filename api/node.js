const fetch = require('node-fetch')
fetch('http://localhost:3000/api/users').then(x =>{
    return x.json()
}).then(ok =>{
    for(var i=0; i<2; i++) {
        console.log(ok[i])
    }
})