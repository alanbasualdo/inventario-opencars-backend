const { Router } = require("express")
const { cityPost, cityGet, cityDel } = require("../controllers/ciudades")
const { validarJWT } = require("../middlewares/jwt-validator")

const router = Router()

router.post('/', [
    validarJWT
], cityPost)

router.get('/', [
    validarJWT
], cityGet)

router.delete('/:id', [
    validarJWT
], cityDel)

module.exports = router