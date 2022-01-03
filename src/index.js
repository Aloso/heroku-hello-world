const express = require('express')
const Uwuifier = require('uwuifier')
const app = express()
const port = 3000

const uwuifier = new Uwuifier();

app.use(express.static('../public'));

app.get('/uwu', (req, res) => {
    res.send(uwuifier.uwuifySentence(req.query.text))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
