const http = require('http')
const {readFileSync} = require('fs')

// get all files 
const homePage = readFileSync('./navbar-app/index.html')
const homestyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homejs = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req, res) => {
    // req : chno taleb l user 
    // res : chno ghadi n3tiweh

    // console.log(req.method)
    const url = req.url

    // home
    if (url === '/') {

        res.writeHead(200, { 'content-type': 'text/html' }) // kind of content that I will sent (n9lb f google MIME TYPE )
        // 200 means that the requiste was succesfel

        res.write(homePage) // we can put the content derctely in to res.end() and it will be the same 
        res.end()
        
    } 
    // about

    else if (url === '/about') {

        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1> about page</h1>')
        res.end()

    } 
    // styles
    else if(url === '/styles.css') {

        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homestyle)
        res.end()

    }
    // js
    else if(url === '/browser-app.js') {

        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homejs)
        res.end()

    }
    // image
    else if(url === '/logo.svg') {

        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()

    }
    else {

        res.writeHead(404, { 'content-type': 'text/html' }) 
        res.write('<h1> page not found </h1>') 
        res.end()

    }

})

server.listen(5500)
// mn 0 -- l 1024 already do somethings so we can't use them as ports 