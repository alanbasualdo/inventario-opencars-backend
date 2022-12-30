const { Schema, model } = require('mongoose')

const Ciudad = Schema({

    nombre: {
        type: String
    }
})

Ciudad.methods.toJSON = function () {
    const { __v, password, _id, ...ciudad } = this.toObject()
    ciudad.uid = _id
    return ciudad
}

module.exports = model('Ciudad', Ciudad)