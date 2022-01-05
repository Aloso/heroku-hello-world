const express = require('express')
const Uwuifier = require('uwuifier')
const app = express()
const port = process.env.PORT || 80;

const uwuifier = new Uwuifier();

app.use('/', express.static(__dirname + '/public'));

app.get('/uwu', (req, res) => {
    res.send(uwuifier.uwuifySentence(req.query.text))
})

app.all('*', (req, res) => {
    res.send(uwuifier.uwuifySentence("404 Not found!"), 404)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})