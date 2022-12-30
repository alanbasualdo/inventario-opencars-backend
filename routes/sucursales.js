const { Router } = require("express")
const { sucPost, sucGet, sucDel } = require("../controllers/sucursales")
const { validarJWT } = require("../middlewares/jwt-validator")

const router = Router()

router.post('/', [
    validarJWT
], sucPost)

router.get('/', [
    validarJWT
], sucGet)

router.delete('/:id', [
    validarJWT
], sucDel)

module.exports = router