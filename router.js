const express = require('express');
const router = express.Router();

const conn= require ('./modelo/db');

router.get('/', (req, res,)=>{
    res.render('index', {var1:'Esto es una variable'});



//    conn.query('SELECT * FROM users', (error, results)=>{
//     if (error) {
//         throw error;
//    }else{ res.send(results);
//    }
// })
});

module.exports= router;
