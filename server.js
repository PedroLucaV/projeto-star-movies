const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('Star Movies API')
})

app.get('/Movies', (req, res) => {
    res.send(require('./data.json'))
})

app.listen(8080, () => {
    console.log('Server open!')
})