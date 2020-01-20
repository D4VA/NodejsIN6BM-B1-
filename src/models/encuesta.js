'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var EncuestaSchema = Schema({
    title: String,
    description: String,
    option: {
        si: Number,
        no: Number,
        maybe: Number,
        users: []
    },
    listComent: [],
    user: { type: Schema.objectId, ref:'user' }
})

module.exports = mongoose.model('encuenta', EncuestaSchema)