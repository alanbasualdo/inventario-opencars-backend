const { response } = require('express')
const Impresora = require('../models/impresora')

const impPost = async (req, res = response) => {

    const { ciudad, sucursal, marca, modelo, toner, propia, sector,
        ip, codigo, proveedor, comentarios } = req.body

    const existe = await Impresora.findOne({
        ciudad, sucursal, marca, modelo, toner, sector, ip, codigo
    })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const impresora = new Impresora({
        ciudad, sucursal, marca, modelo, toner, propia, sector,
        ip, codigo, proveedor, comentarios
    })

    // Guardar en base de datos
    await impresora.save()

    res.json({
        msg: 'ok',
        impresora
    })

}

const impGet = async (req, res = response) => {

    const query = req.body

    const [total, impresoras] = await Promise.all([
        Impresora.countDocuments(query),
        Impresora.find(query)
    ])

    res.json({
        total,
        impresoras
    })
}

module.exports = {
    impPost,
    impGet
}