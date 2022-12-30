const { Schema, model } = require('mongoose')

const Proveedor = Schema({

    nombre: {
        type: String
    }
})

Proveedor.methods.toJSON = function () {
    const { __v, password, _id, ...proveedor } = this.toObject()
    proveedor.uid = _id
    return proveedor
}

module.exports = model('Proveedor', Proveedor)