const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./public'))    //impoooortent

// app.get('/', (req, res) => {
//  res.sendFile(path.resolve(__dirname , './navbar-app/index.html'))     // n7to 7ta l index.html f public wbla mandiro hadchi
    // adding to static assets
    // SSR : server side rendering 
// })

app.all('*', (req, res) => {
    res.status(404).send('<h1> resource not found </h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})