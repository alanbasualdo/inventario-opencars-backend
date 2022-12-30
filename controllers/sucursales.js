const { response } = require('express')
const Sucursal = require('../models/sucursal')

const sucPost = async (req, res = response) => {

    const { nombre } = req.body

    const existe = await Sucursal.findOne({ nombre })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const sucursal = new Sucursal({ nombre })

    // Guardar en base de datos
    await sucursal.save()

    res.json({
        msg: 'ok',
        sucursal
    })
}

const sucGet = async (req, res = response) => {

    const query = req.body

    const [total, sucursales] = await Promise.all([
        Sucursal.countDocuments(query),
        Sucursal.find(query).sort({ $natural: -1 })
    ])

    res.json({
        total,
        sucursales
    })
}

const sucDel = async (req, res = response) => {

    const { id } = req.params
    await Sucursal.findByIdAndDelete(id)

    res.json({
        msg: 'ok'
    })
}

module.exports = {
    sucPost,
    sucGet,
    sucDel
}