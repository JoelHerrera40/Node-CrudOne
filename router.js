const express = require('express');
const router = express.Router();

const conn= require ('./modelo/db');

router.get('/', (req, res,)=>{
   conn.query('SELECT * FROM users', (error, results)=>{
    if (error) {
        throw error;
   }else{ res.send(results);
   }
})
});

module.exports= router;
