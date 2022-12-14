const { Router } = require("express")
const { check } = require("express-validator")
const { login, renovarToken } = require("../controllers/login")
const { fieldsValidator } = require("../middlewares/fields-validator")
const { validarJWT } = require("../middlewares/jwt-validator")

const router = Router()

router.post('/', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    fieldsValidator
], login)

router.get('/renew', validarJWT, renovarToken)

module.exports = router