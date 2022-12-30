const { Schema, model } = require('mongoose')

const Sucursal = Schema({

    nombre: {
        type: String
    }
})

Sucursal.methods.toJSON = function () {
    const { __v, password, _id, ...sucursal } = this.toObject()
    sucursal.uid = _id
    return sucursal
}

module.exports = model('Sucursal', Sucursal)