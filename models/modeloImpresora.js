const { Schema, model } = require('mongoose')

const ModeloImpresora = Schema({

    nombre: {
        type: String
    }
})

ModeloImpresora.methods.toJSON = function () {
    const { __v, password, _id, ...modelo } = this.toObject()
    modelo.uid = _id
    return modelo
}

module.exports = model('ModeloImpresora', ModeloImpresora)