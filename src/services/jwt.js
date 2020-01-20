'use strict'

var jwt = require('jwt-simple')
var moment = require('moment') //Dar fecha de creacion y expiracion del token
var secret = 'clave_secreta_IN6BM'

exports.createToken = function (user){ // registrar los datos del usuario y los va a codificar
    var payload = {
        sub: user._id, //Guardar el ID en la base de datos
        nombre: user.nombre,
        usuario: user.usuario,
        email: user.email,
        rol: user.rol,
        image: user.image,
        iat: moment().unix(), // fecha de creacion
        exp: moment().day(30,"days").unix()
    }

    return jwt.encode(payload,secret) //Usuario que se identificara y el objeto que guardara en el / clave secreta
}

