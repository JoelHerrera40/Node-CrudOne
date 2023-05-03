const express = require('express');
const router = express.Router();

const conexion= require ('./modelo/db');

router.get('/', (req, res,)=>{
   conexion.query('SELECT * FROM users')

});

module.exports= router;
