const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromeses = require('fs').promises


const logEvents = require('./logEvents')
const EventEmitter = require('events');
class myEmitter extends EventEmitter { };
// initialize object 
const myEmitters = new myEmitter();

const PORT = process.env.PORT || 3500 ;

const server = http.createServer((req , res) => {
    console.log(req.url , req.method) ; 
});

server.listen(PORT , () => console.log(`server running on port ${PORT}`));




























// // add listener for the log event 
// myEmitters.on('log', (msg) => { logEvents(msg) })
// setTimeout(() => {
//     //emit event 
//     myEmitters.emit('log', 'log event emitted !')
// },2000)