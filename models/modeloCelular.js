const { Schema, model } = require('mongoose')

const ModeloCelular = Schema({

    nombre: {
        type: String
    }
})

ModeloCelular.methods.toJSON = function () {
    const { __v, password, _id, ...modelo } = this.toObject()
    modelo.uid = _id
    return modelo
}

module.exports = model('ModeloCelular', ModeloCelular)