const authorize = (req, res, next) =>{
    const {user} = req.query;
    if (user === 'john') {
        req.user = {name:'gerald',id: 4}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}
module.exports = authorize