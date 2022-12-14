const { response, request } = require('express')
const bcryptjs = require('bcryptjs')
const User = require('../models/user')

const userGet = async (req = request, res = response) => {

    const [total, users] = await Promise.all([
        User.countDocuments(),
        User.find()
    ])

    res.json({
        total,
        users
    })
}

const userPost = async (req, res = response) => {

    const { email, password } = req.body

    try {

        const existeEmail = await User.findOne({ email })

        if (existeEmail) {
            return res.json({
                msg: 'EmailAlreadyRegistered'
            })
        }

        const user = new User({ email, password })

        // Encriptar la constraseña(hash)
        const salt = bcryptjs.genSaltSync()
        user.password = bcryptjs.hashSync(password, salt)

        // Guardar en base de datos
        await user.save()

        res.json({
            msg: 'UserCrated',
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Algo salió mal.'
        })
    }
}

const userPut = async (req, res = response) => {

    // const id = req.params.id
    const { id } = req.params
    const { _id, password, email } = req.body

    if (password) {
        const salt = bcryptjs.genSaltSync()
        password = bcryptjs.hashSync(password, salt)
    }

    const user = await User.findByIdAndUpdate(id, { new: true })

    res.json({
        msg: 'Usuario actualizado correctamente.',
        user
    })
}

const userDelete = async (req, res = response) => {

    const { id } = req.params

    // Borrarlo físicamente
    const user = await User.findByIdAndDelete(id)

    res.json({
        'msg': `Usuario ${user.email} eliminado correctamente.`
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}