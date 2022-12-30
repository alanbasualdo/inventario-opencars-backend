const { Schema, model } = require('mongoose')

const Toner = Schema({

    nombre: {
        type: String
    }
})

Toner.methods.toJSON = function () {
    const { __v, password, _id, ...toner } = this.toObject()
    toner.uid = _id
    return toner
}

module.exports = model('Toner', Toner)