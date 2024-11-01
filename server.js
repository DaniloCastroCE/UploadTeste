const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.use(express.static(path.join('public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server conectando')
})