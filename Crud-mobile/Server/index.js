//Import modules
const mysql  = require('mysql2')
const express = require('express')
const app = express()
const port = 3010
//Set infromação como json
app.use(express.json())


//Cria conexão com o banco
const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'login_data',
    password:''
})

function select(){
    return 'SELECT * FROM usuarios'
}

//HTTP tratamento

//-----GET-----
app.get('/', function(req, res){
    conection.query(select(), function(err, result){
        if (err) throw err
        res.status(200).json(result)
    })
})


//Servidor
app.listen(port,() => {
    console.log('Servidor em operação ...')
})