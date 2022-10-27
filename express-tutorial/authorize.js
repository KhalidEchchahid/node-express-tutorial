const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'khalid') {
        req.user = { name: 'khalid', id: 3 }
        console.log('authorize')
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}
module.exports = authorize