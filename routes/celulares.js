const { Router } = require("express")
const { celGet, celPost, celDel, celPut } = require("../controllers/celulares")
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

module.exports = router