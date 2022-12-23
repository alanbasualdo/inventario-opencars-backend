const { Router } = require("express")
const { check } = require("express-validator")
const { impGet, impPost, impDel } = require("../controllers/impresoras")
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

module.exports = router