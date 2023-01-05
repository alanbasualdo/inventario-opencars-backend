const { Router } = require("express")
const { impGet, impPost, impDel, impPut, marcaPost, marcaGet, marcaDel, modeloPost,
    modeloGet, modeloDel, tonerPost, tonerGet, tonerDel,
    proveedorPost, proveedorGet, proveedorDel } = require("../controllers/impresoras")
const { validarJWT } = require("../middlewares/jwt-validator")

const router = Router()

router.post('/', [
    validarJWT
], impPost)

router.get('/', [
    validarJWT
], impGet)

router.delete('/:id', [
    validarJWT
], impDel)

router.put('/:id', [
    validarJWT
], impPut)

/////////////////////////////////////////////////// Marcas ///////////////////////////////////////////////////

router.post('/marcasImpresoras', [
    validarJWT
], marcaPost)

router.get('/marcasImpresoras', [
    validarJWT
], marcaGet)

router.delete('/marcasImpresoras/:id', [
    validarJWT
], marcaDel)

/////////////////////////////////////////////////// Modelos ///////////////////////////////////////////////////

router.post('/modelosImpresoras', [
    validarJWT
], modeloPost)

router.get('/modelosImpresoras', [
    validarJWT
], modeloGet)

router.delete('/modelosImpresoras/:id', [
    validarJWT
], modeloDel)

/////////////////////////////////////////////////// Tóners ///////////////////////////////////////////////////

router.post('/toners', [
    validarJWT
], tonerPost)

router.get('/toners', [
    validarJWT
], tonerGet)

router.delete('/toners/:id', [
    validarJWT
], tonerDel)

/////////////////////////////////////////////////// Proveedores ///////////////////////////////////////////////////

router.post('/proveedores', [
    validarJWT
], proveedorPost)

router.get('/proveedores', [
    validarJWT
], proveedorGet)

router.delete('/proveedores/:id', [
    validarJWT
], proveedorDel)

module.exports = router