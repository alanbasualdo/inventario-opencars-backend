const { response } = require('express')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt')

const login = async (req, res = response) => {

    const { email, password } = req.body

    try {

        // Verificar si el email existe
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({
                msg: 'NotRegisteredEmail'
            })
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, user.password)
        if (!validPassword) {
            return res.json({
                msg: 'InvalidPassword'
            })
        }

        // Generar el JWT
        const token = await generarJWT(user.id)

        res.json({
            msg: 'LogOk',
            token,
            email
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Algo salió mal.'
        })
    }
}

const renovarToken = async (req, res = response) => {

    const { user } = req

    // Generar el JWT
    const token = await generarJWT(user.id)

    const { email } = user

    res.json({
        token,
        email
    })

}

module.exports = {
    login,
    renovarToken
}