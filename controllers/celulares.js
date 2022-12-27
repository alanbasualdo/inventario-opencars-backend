const { response } = require('express')
const Celular = require('../models/celular')

const celPost = async (req, res = response) => {

    const { ciudad, sucursal, facturacion, marca, modelo,
        usuario, estado, corporativo, numero, comentarios } = req.body

    const existe = await Celular.findOne({ numero })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const celular = new Celular({
        ciudad, sucursal, facturacion, marca, modelo,
        usuario, estado, corporativo, numero, comentarios
    })

    // Guardar en base de datos
    await celular.save()

    res.json({
        msg: 'ok',
        celular
    })

}

const celGet = async (req, res = response) => {

    const query = req.body

    const [total, celulares] = await Promise.all([
        Celular.countDocuments(query),
        Celular.find(query).sort({ $natural: -1 })
    ])

    res.json({
        total,
        celulares
    })
}

const celDel = async (req, res = response) => {

    const { id } = req.params
    await Celular.findByIdAndDelete(id)

    res.json({
        msg: 'ok'
    })
}

const celPut = async (req, res = response) => {

    console.log(req.params)
    console.log(req.body)

    res.json({
        msg: 'ok'
    })

    /* const { id } = req.params
    const { state, user, ...data } = req.body

    data.user = req.user._id

    const product = await Product.findByIdAndUpdate(id, data, { new: true })

    res.json({
        msg: `${product.name} se ha actualizado correctamente.`,
        product
    }) */

}

module.exports = {
    celPost,
    celGet,
    celDel,
    celPut
}