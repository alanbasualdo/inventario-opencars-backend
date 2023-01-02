const { Router } = require("express")
const { celGet, celPost, celDel, celPut, marcaPost, marcaGet, marcaDel, modeloPost, modeloGet, modeloDel } = require("../controllers/celulares")
const { validarJWT } = require("../middlewares/jwt-validator")

const router = Router()

router.post('/', [
    validarJWT
], celPost)

router.get('/', [
    validarJWT
], celGet)

router.delete('/:id', [
    validarJWT
], celDel)

router.put('/:id', [
    validarJWT
], celPut)

/////////////////////////////////////////////////// Marcas ///////////////////////////////////////////////////

router.post('/marcas', [
    validarJWT
], marcaPost)

router.get('/marcas', [
    validarJWT
], marcaGet)

router.delete('/marcas/:id', [
    validarJWT
], marcaDel)

/////////////////////////////////////////////////// Modelos ///////////////////////////////////////////////////

router.post('/modelos', [
    validarJWT
], modeloPost)

router.get('/modelos', [
    validarJWT
], modeloGet)

router.delete('/modelos/:id', [
    validarJWT
], modeloDel)

module.exports = router