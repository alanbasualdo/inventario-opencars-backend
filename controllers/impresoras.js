const { response } = require('express')
const Impresora = require('../models/impresora')

const impPost = async (req, res = response) => {

    const { ciudad, sucursal, marca, modelo, toner,
        propia, estado, sector, codigo, ip, proveedor, comentarios } = req.body

    const existe = await Impresora.findOne({ ip })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const impresora = new Impresora({
        ciudad, sucursal, marca, modelo, toner,
        propia, estado, sector, codigo, ip, proveedor, comentarios
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
        Impresora.find(query).sort({ $natural: -1 })
    ])

    res.json({
        total,
        impresoras
    })
}

const impDel = async (req, res = response) => {

    const { id } = req.params
    await Impresora.findByIdAndDelete(id)

    res.json({
        msg: 'ok'
    })
}

const impPut = async (req, res = response) => {

    const { id } = req.params
    const data = req.body

    const impresora = await Impresora.findByIdAndUpdate(id, data, { new: true })

    res.json({
        msg: 'ok',
        impresora
    })
}

module.exports = {
    impPost,
    impGet,
    impDel,
    impPut
}