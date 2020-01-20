'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = Schema({
    name: String,
    user: String,
    email: String,
    password: String,
    rol: String,
    image: String
})

module.exports = mongoose.model('user', userSchema)


