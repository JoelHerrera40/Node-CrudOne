const express = require('express');
const router = express.Router();

const conn= require ('./modelo/db');

//Show all register
router.get('/', (req, res,)=>{

   conn.query('SELECT * FROM users', (error, results)=>{
    if (error) {
        throw error;
   }else{
    res.render('index', {results:results});
   }
})
});


// Create registers
router.get('/create',(req, res,)=>{
    res.render('create');
})



module.exports= router;
