const { response } = require('express')
const Celular = require('../models/celular')
const Marca = require('../models/marcaCelular')
const Modelo = require('../models/modeloCelular')

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

    const { id } = req.params
    const data = req.body

    const celular = await Celular.findByIdAndUpdate(id, data, { new: true })

    res.json({
        msg: 'ok',
        celular
    })
}

/////////////////////////////////////////////////// Marcas ///////////////////////////////////////////////////

const marcaPost = async (req, res = response) => {

    const { nombre } = req.body

    const existe = await Marca.findOne({ nombre })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const marca = new Marca({ nombre })

    // Guardar en base de datos
    await marca.save()

    res.json({
        msg: 'ok',
        marca
    })
}

const marcaGet = async (req, res = response) => {

    const query = req.body

    const [total, marcas] = await Promise.all([
        Marca.countDocuments(query),
        Marca.find(query).sort({ $natural: -1 })
    ])

    res.json({
        total,
        marcas
    })
}

const marcaDel = async (req, res = response) => {

    const { id } = req.params
    await Marca.findByIdAndDelete(id)

    res.json({
        msg: 'ok'
    })
}

/////////////////////////////////////////////////// Modelos ///////////////////////////////////////////////////

const modeloPost = async (req, res = response) => {

    const { nombre } = req.body

    const existe = await Modelo.findOne({ nombre })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const modelo = new Modelo({ nombre })

    // Guardar en base de datos
    await modelo.save()

    res.json({
        msg: 'ok',
        modelo
    })
}

const modeloGet = async (req, res = response) => {

    const query = req.body

    const [total, modelos] = await Promise.all([
        Modelo.countDocuments(query),
        Modelo.find(query).sort({ $natural: -1 })
    ])

    res.json({
        total,
        modelos
    })
}

const modeloDel = async (req, res = response) => {

    const { id } = req.params
    await Modelo.findByIdAndDelete(id)

    res.json({
        msg: 'ok'
    })
}

module.exports = {
    celPost,
    celGet,
    celDel,
    celPut,
    marcaPost,
    marcaGet,
    marcaDel,
    modeloPost,
    modeloGet,
    modeloDel
}