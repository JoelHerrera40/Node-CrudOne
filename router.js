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


const crud= require ('./controller/crud');
router.post('/save', crud.save);

module.exports= router;
