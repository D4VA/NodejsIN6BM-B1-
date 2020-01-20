'use strict'

//VARIABLES

const express = require('express')
const app = express()
const bodyParse = require('body-parser')

//CARGA DE RUTAS    
var user_routes = require('./routes/userRoutes')

//MIDDLEWARES
app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

//CABECERAS
app.use((req,res, next)=>{
    res.header('Access-Controll-Allow-Origin', '*');
    res.header('Access-Constrol-Allow-Header', 'Authorization, X-API-Key, Origin, X_Requested-With, Content-Type, Accept,Access-Control-Allow-Request-Method')
    res.header('Access-Controll-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next();
});

//RUTAS
app.use('/api', user_routes)

//EXPORTAR
module.exports = app;


