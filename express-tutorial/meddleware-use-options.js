const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
// ligne by ligne 

// 1. use vs route 
// 2. options - our own (hadchi li derna f had l page ) / express (app.use(express.static('./public')) ) / third party (app.use(morgan('tiny'))    , dert npm i morgan  )



// app.use(logger)   logger for all methods 


// app.use('/api' , logger)     logger for products and items (anything after api)


app.use([logger , authorize])  // Multiple Middleware Functions :  they executed in order 



app.get('/', (req, res) => {

    res.send('HOME')
})
app.get('/about',(req, res) => {
    res.send('ABOUT')
})

app.get('/api/products', (req,res)=>{
   res.send('Products')
})
app.get('/api/items', (req,res)=>{
   res.send('Items')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})