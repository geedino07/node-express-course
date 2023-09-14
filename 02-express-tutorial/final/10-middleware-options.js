const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})



//updated code
// const express = require ('express')
// const app = express()
// const logger = require ('./logger')
// const authorize = require('./authorize')
// const morgan = require ('morgan')


// // app.use([authorize, logger])
// // app.use(express.static('./navbar-app'))
// app.use(morgan('tiny'))



// app.get('/', (req, res)=>{
//     res.send('Home')
// })

// app.get('/about', (req, res)=>{
//     // res.send('About Page')
//     res.writeHead(200, {'content-type': 'text/html'})
//     res.write('<h1>You can learn more about us by clicking the link below</h1><p>')
//     res.write('<h2><a href="/api/v1/product">product</a></h2><p>')
//     res.end()
// })

// app.get('/api/v1/product', (req, res)=>{
//     // res.send('About Products')
//     res.writeHead(200, {'content-type': 'text/html'})
//     res.write('<h1>You can learn more about us by clicking the link below</h1><p>')
//     res.write('<h2><a href="/api/v1/query">Query</a></h2><p>')
//     // console.log(req.user)
//     res.end()
// })

// app.get('/api/v1/query', [authorize, logger], (req, res)=>{
//     // res.send('About Sales')
//     res.writeHead(200, {'content-type': 'text/html'})
//     res.write('<h1>You can learn more about Sales by clicking to return to homepage</h1>')
//     res.write('<h2><a href="/">Home</a></h2>')
//     console.log(req.user)
//     res.end()

// })

// app.listen(5000, ()=>{
//     console.log('server is listening on port 5000')
})