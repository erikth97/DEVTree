import express from 'express'  // ESM Ecmascript modules
const app = express()

// R O U T I N G
app.get('/', (req, res) => {
    res.send('Hola Mundo Express')
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Servidor Funcionando en el puerto: ', port)
})