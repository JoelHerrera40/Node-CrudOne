
const conexion = require('../modelo/db');

exports.save = (req , res)=>{
    const user =req.body.user;
    const rol =req.body.rol;
    conexion.query("INSERT INTO users SET ?", {user:user,rol:rol}, (error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
};


exports.update = (req, res)=>{

    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;

    conexion.query('UPDATE users SET ? WHERE id = ?', [{user:user,rol:rol},id],(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });

}

