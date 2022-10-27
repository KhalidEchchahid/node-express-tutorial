const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end('Welcome')
// })

//using event Emitter API
const server = http.createServer()
// emit requist event 
// subscribe to it / listen to it / respond to it 
server.on('requist' , (req , res)=>{
    res.end('welcome')
})


server.listen(5000)