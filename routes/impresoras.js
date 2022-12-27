const { Router } = require("express")
const { impGet, impPost, impDel, impPut } = require("../controllers/impresoras")
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

module.exports = router