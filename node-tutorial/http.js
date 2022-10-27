const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(` <p>salam ya NodeJs 17-7-22 </p>
        <a href="/about" >about </a>
        ` )
    }
    if (req.url === '/about') {
        res.end(' Here is our short history')
    }
    res.end(`
    <h1> error 404 </h1>
    <p> this page dosn't existe </p>
    <a href="/" > back home </a>
    `)
})

server.listen(5500)