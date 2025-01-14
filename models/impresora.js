const { Schema, model } = require('mongoose')

const Impresora = Schema({

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
    toner: {
        type: String
    },
    propia: {
        type: String
    },
    estado: {
        type: String,
        default: 'Activa'
    },
    sector: {
        type: String
    },
    ip: {
        type: String
    },
    codigo: {
        type: Number
    },
    proveedor: {
        type: String
    },
    comentarios: {
        type: String,
        default: ''
    }

})

Impresora.methods.toJSON = function () {
    const { __v, password, _id, ...impresora } = this.toObject()
    impresora.uid = _id
    return impresora
}

module.exports = model('Impresora', Impresora)