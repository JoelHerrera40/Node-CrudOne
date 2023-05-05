const express = require('express');
const router = express.Router();

const conn= require ('./modelo/db');

// Show all register
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
});

// Edit users

router.get('/edit/:id',(req, res,)=>{

    const id = req.params.id;
    conn.query('SELECT * FROM users WHERE id=?',[id], (error, results)=>{
     if (error) {
         throw error;
    }else{
        res.render('edit', {user:results[0]});
    }
 })
 });


const crud= require ('./controller/crud');
router.post('/save', crud.save);

router.post('/update', crud.update);



module.exports= router;
