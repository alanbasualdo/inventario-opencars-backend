const { Schema, model } = require('mongoose')

const MarcaImpresora = Schema({

    nombre: {
        type: String
    }
})

MarcaImpresora.methods.toJSON = function () {
    const { __v, password, _id, ...marca } = this.toObject()
    marca.uid = _id
    return marca
}

module.exports = model('MarcaImpresora', MarcaImpresora)