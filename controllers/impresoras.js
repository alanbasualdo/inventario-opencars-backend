const { response } = require('express')
const Impresora = require('../models/impresora')
const MarcaImpresora = require('../models/marcaImpresora')
const ModeloImpresora = require('../models/modeloImpresora')
const Toner = require('../models/toner')
const Proveedor = require('../models/proveedor')

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

/////////////////////////////////////////////////// Marcas ///////////////////////////////////////////////////

const marcaPost = async (req, res = response) => {

    const { nombre } = req.body

    const existe = await MarcaImpresora.findOne({ nombre })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const marca = new MarcaImpresora({ nombre })

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
        MarcaImpresora.countDocuments(query),
        MarcaImpresora.find(query).sort({ $natural: -1 })
    ])

    res.json({
        total,
        marcas
    })
}

const marcaDel = async (req, res = response) => {

    const { id } = req.params
    await MarcaImpresora.findByIdAndDelete(id)

    res.json({
        msg: 'ok'
    })
}

/////////////////////////////////////////////////// Modelos ///////////////////////////////////////////////////

const modeloPost = async (req, res = response) => {

    const { nombre } = req.body

    const existe = await ModeloImpresora.findOne({ nombre })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const modelo = new ModeloImpresora({ nombre })

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
        ModeloImpresora.countDocuments(query),
        ModeloImpresora.find(query).sort({ $natural: -1 })
    ])

    res.json({
        total,
        modelos
    })
}

const modeloDel = async (req, res = response) => {

    const { id } = req.params
    await ModeloImpresora.findByIdAndDelete(id)

    res.json({
        msg: 'ok'
    })
}

/////////////////////////////////////////////////// Tóners ///////////////////////////////////////////////////

const tonerPost = async (req, res = response) => {

    const { nombre } = req.body

    const existe = await Toner.findOne({ nombre })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const toner = new Toner({ nombre })

    // Guardar en base de datos
    await toner.save()

    res.json({
        msg: 'ok',
        toner
    })
}

const tonerGet = async (req, res = response) => {

    const query = req.body

    const [total, toners] = await Promise.all([
        Toner.countDocuments(query),
        Toner.find(query).sort({ $natural: -1 })
    ])

    res.json({
        total,
        toners
    })
}

const tonerDel = async (req, res = response) => {

    const { id } = req.params
    await Toner.findByIdAndDelete(id)

    res.json({
        msg: 'ok'
    })
}

/////////////////////////////////////////////////// Proveedores ///////////////////////////////////////////////////

const proveedorPost = async (req, res = response) => {

    const { nombre } = req.body

    const existe = await Proveedor.findOne({ nombre })

    if (existe) {
        res.json({
            msg: 'existe'
        })
        return
    }

    const proveedor = new Proveedor({ nombre })

    // Guardar en base de datos
    await proveedor.save()

    res.json({
        msg: 'ok',
        proveedor
    })
}

const proveedorGet = async (req, res = response) => {

    const query = req.body

    const [total, proveedores] = await Promise.all([
        Proveedor.countDocuments(query),
        Proveedor.find(query).sort({ $natural: -1 })
    ])

    res.json({
        total,
        proveedores
    })
}

const proveedorDel = async (req, res = response) => {

    const { id } = req.params
    await Proveedor.findByIdAndDelete(id)

    res.json({
        msg: 'ok'
    })
}

module.exports = {
    impPost,
    impGet,
    impDel,
    impPut,
    marcaPost,
    marcaGet,
    marcaDel,
    modeloPost,
    modeloGet,
    modeloDel,
    tonerPost,
    tonerGet,
    tonerDel,
    proveedorGet,
    proveedorPost,
    proveedorDel
}