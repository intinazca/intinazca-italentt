// "el modelo representa el archivo de la db"
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//usuarioSchema: es el molde del documento de usuarios
var usuarioSchema = Schema({
    nombre: String,
    fechaNacimiento: String,
    edad: Number,
    correo: String,
});

//a la coleccion de italentts de la db, le vamos a mandar los datos de usuarioSchema
module.exports = mongoose.model('Usuario', usuarioSchema); 