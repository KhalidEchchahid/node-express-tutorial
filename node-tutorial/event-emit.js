const EventEmitter = require('events') 

const customEmitter = new EventEmitter()

 
customEmitter.on('response' , (name , id) =>{
    console.log(`data recieved ${name} ${id}`)
}) // name of the event (response) whiya li kan7toha f param d emit 

customEmitter.on('response' , () =>{
    console.log('some other logic here ')
})

customEmitter.emit('response' , 'khalid' , 23) 

// ligne by ligne