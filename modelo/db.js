const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_crud_db'
});

conn.connect((error)=>{
    if (error){
        console.error('El error de conexion es :' + error);
        return
    }
    console.log('Conectado a la DB mySQL'); 
});


module.exports = conn;


