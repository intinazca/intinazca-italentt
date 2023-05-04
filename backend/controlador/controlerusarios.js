'use strict'

var Usuario = require('../modelo/usuario');

var controller = {

    test: function (req, res) {
        return res.status(200).send({
            message: "soy el test usando el controlleer"
        });
    },
    // metodo para guardar el dato nuevo en la db
    guardarUsuario: function(req, res){
        //capturamos los datos
        var usuario = new Usuario(); 
        var datosRecibidos = req.body;
        console.log("-------------------");
        console.log(datosRecibidos);
        usuario.nombre = datosRecibidos.nombre;
        usuario.fechaNacimiento = datosRecibidos.fechaNacimiento;
        usuario.edad = datosRecibidos.edad;
        usuario.correo = datosRecibidos.correo;

        // guardamos en la db
        // usuario.save((err, usarioGuardado)=>{
        //     console.log("has aqui todo bien");
        //     if(err) return res.status(500).send({message: "error al guardar el usuario"});

        //     if(!usarioGuardado) return res.status(404).send({message: "error al guardar no existe la data"});
                
        //     return res.status(200).send({usuario: usarioGuardado});
        // });

        try{
            usuario.save();
            return res.status(200).send({message: "usuario guardado con exito"});
            
        }catch(err){
            if(err) return res.status(500).send({message: "error al guardar el usuario"});
    
            if(!usarioGuardado) return res.status(404).send({message: "error al guardar no existe la data"});
              
        }
    },

}

module.exports = controller;