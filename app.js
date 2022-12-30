const express = require('express')
const { dbConnection } = require('./database/config')
require('dotenv').config()
const cors = require('cors')

// Crear el servidor express
const app = express()

// Conexión a la base de datos
dbConnection()

// Para que sólo se puede consumir la API del dominio que yo permita
app.use(cors())

// Directorio público
app.use(express.static('public'))

// Lectura y parseo del body
app.use(express.json())

// Rutas
app.use('/login', require('./routes/login'))
app.use('/register', require('./routes/register'))
app.use('/impresoras', require('./routes/impresoras'))
app.use('/celulares', require('./routes/celulares'))
app.use('/ciudades', require('./routes/ciudades'))
app.use('/sucursales', require('./routes/sucursales'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})