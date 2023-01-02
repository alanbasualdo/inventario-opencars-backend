const { Schema, model } = require('mongoose')

const Marca = Schema({

    nombre: {
        type: String
    }
})

Marca.methods.toJSON = function () {
    const { __v, password, _id, ...marca } = this.toObject()
    marca.uid = _id
    return marca
}

module.exports = model('Marca', Marca)