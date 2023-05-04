'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors');


//---- CORDS-----

app.use(cors());
const allowedOrigins = [
    'http://localhost',
    'http://localhost:4200',
    'localhost:4200',
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    },
};

app.options('*', cors(corsOptions));

//cargar archivos de rutas
var usarios_router = require('../controlador/rutas/rutas');

//configuramos el middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()) //lo que me llegue lo convierto en json

//rutas para la conexión (req: lo que llega del front, resp: lo que le responde el server)
app.use('/api', usarios_router);

// exportamos
module.exports = app;