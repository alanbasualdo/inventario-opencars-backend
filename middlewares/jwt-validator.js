const { response, request } = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const validarJWT = async (req = request, res = response, next) => {

    const token = req.header('token')

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }

    try {

        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        const user = await User.findById(uid)

        if (!user) {
            return res.status(401).json({
                msg: 'Usuario no existe'
            })
        }
        
        req.user = user

        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}

module.exports = {
    validarJWT
}