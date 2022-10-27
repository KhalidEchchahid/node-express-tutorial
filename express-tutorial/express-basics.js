const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('home page')
})

app.get('/about', (req, res) => {
    res.status(200).send('about page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1> resource not found </h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})


// http methods
// app.get        read data
// app.post       insert data
// app.put        update data
// app.delete     delete data
// app.all       all methods
// app.use
// app.listen