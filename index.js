const express = require ('express')

const app = express()

// R O U T I N G
app.get('/', (req, res) => {
    res.send('Hola Mundo Express')
})

app.listen(4000, () => {
    console.log('Servidor Funcionando...')
})