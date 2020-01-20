'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ComentarioSchema = Schema({
    comentario: String,
    encuentra: { type: Schema.ObjectId, ref: 'encuesta' },
    user: { type: Schema.ObjectId, ref: 'user' }
})

module.exports = mongoose.model('comentario', ComentarioSchema)