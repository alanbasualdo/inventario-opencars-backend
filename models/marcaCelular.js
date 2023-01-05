const { Schema, model } = require('mongoose')

const MarcaCelular = Schema({

    nombre: {
        type: String
    }
})

MarcaCelular.methods.toJSON = function () {
    const { __v, password, _id, ...marca } = this.toObject()
    marca.uid = _id
    return marca
}

module.exports = model('MarcaCelular', MarcaCelular)