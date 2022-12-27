const { Schema, model } = require('mongoose')

const Celular = Schema({

    ciudad: {
        type: String
    },
    sucursal: {
        type: String
    },
    marca: {
        type: String
    },
    modelo: {
        type: String
    },
    numero: {
        type: Number
    },
    usuario: {
        type: String
    },
    estado: {
        type: String,
        default: 'Activo'
    },
    corporativo: {
        type: String
    },
    facturacion: {
        type: String
    },
    comentarios: {
        type: String,
        default: ''
    }

})

Celular.methods.toJSON = function () {
    const { __v, password, _id, ...celular } = this.toObject()
    celular.uid = _id
    return celular
}

module.exports = model('Celular', Celular)