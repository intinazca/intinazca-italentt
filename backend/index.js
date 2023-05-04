'use strict'
var app = require('./express/app');

//conexión a la db
var mongose = require('mongoose');
var port = 3700;

mongose.Promise = global.Promise;
mongose.connect('mongodb://localhost:27017/italentt').then((()=>{
    console.log("-----conxión exitosa----");
    //creamos el servidor
    app.listen(port, ()=>{ console.log("servidor de express Ok: 3700");});

})).catch(err=>{
    console.log(err);
});