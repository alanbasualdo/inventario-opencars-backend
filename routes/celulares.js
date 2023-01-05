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

router.post('/marcasCelulares', [
    validarJWT
], marcaPost)

router.get('/marcasCelulares', [
    validarJWT
], marcaGet)

router.delete('/marcasCelulares/:id', [
    validarJWT
], marcaDel)

/////////////////////////////////////////////////// Modelos ///////////////////////////////////////////////////

router.post('/modelosCelulares', [
    validarJWT
], modeloPost)

router.get('/modelosCelulares', [
    validarJWT
], modeloGet)

router.delete('/modelosCelulares/:id', [
    validarJWT
], modeloDel)

module.exports = router