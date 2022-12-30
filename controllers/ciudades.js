const { response } = require('express')
const Ciudad = require('../models/ciudad')

const cityPost = async (req, res = response) => {

    const { nombre } = req.body

    const existe = await Ciudad.findOne({ nombre })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const ciudad = new Ciudad({ nombre })

    // Guardar en base de datos
    await ciudad.save()

    res.json({
        msg: 'ok',
        ciudad
    })
}

const cityGet = async (req, res = response) => {

    const query = req.body

    const [total, ciudades] = await Promise.all([
        Ciudad.countDocuments(query),
        Ciudad.find(query).sort({ $natural: -1 })
    ])

    res.json({
        total,
        ciudades
    })
}

const cityDel = async (req, res = response) => {

    const { id } = req.params
    await Ciudad.findByIdAndDelete(id)

    res.json({
        msg: 'ok'
    })
}

module.exports = {
    cityPost,
    cityGet,
    cityDel
}