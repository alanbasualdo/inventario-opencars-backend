const { Router } = require("express")
const { check } = require("express-validator")
const { userGet, userPost, userPut, userDelete } = require("../controllers/register")
const { existeUsuarioId } = require("../helpers/db-validator")
const { fieldsValidator } = require("../middlewares/fields-validator")
const { validarJWT } = require("../middlewares/jwt-validator")

const router = Router()

router.get('/', [
    validarJWT
], userGet)

router.post('/', [
    check('password', 'La contraseña debe tener más de 5 dígitos').isLength({ min: 5 }),
    check('email', 'El correo no es válido').isEmail(),
    fieldsValidator
], userPost)

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioId),
    fieldsValidator
], userPut)

router.delete('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioId),
    fieldsValidator
], userDelete)

module.exports = router