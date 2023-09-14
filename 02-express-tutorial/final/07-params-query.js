const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})




//Commented out - Practice
// const express = require ('express')
// const app = express()
// const {products, people} = require('./data')


// app.get('/', (req, res)=>{
//     // res.json([{ name: 'tobi'}, {name: 'John'}])
//     // res.json(products)
//     res.send('<h1>Homepage</h1><a href="/api/product">products</a>')
//     console.log('user has just hit homepage')
// })

// app.get('/api/product', (req, res)=>{
//     const newProducts = products.map((products)=>{
//        const {id, name, image} = products
//        return {id, name, image}
//     })
//     res.send(newProducts)
//     console.log('user hit the api/product page')
// })


// app.get('/api/product/:productID', (req, res)=>{
//     console.log(req.params)
//     console.log(req.params.productID)
//     const {productID} = req.params
//     console.log(productID)
//     // const singleProduct = products.find((products)=>products.id === Number(req.params.productID))
//     const singleProduct = products.find(
//         (products)=>products.id === Number(productID)
//     )
    
//     if (!singleProduct) {
//         return res.status(404).send('Product does not exist')
//     }
//     res.send(singleProduct)
// })

// app.get('/api/product/:productID/reviews/:reviewID', (req, res)=>{
//     console.log(req.params)
//     res.send('Hello world')
// })

// app.get('/api/product/v1/query', (req, res)=>{
//     console.log(req.query)

//     const { search, limit } = req.query
//     let sortedProducts = [...products]

//     if (search) {
//         sortedProducts = sortedProducts.filter((product)=>{
//             return product.name.startsWith(search)
//         })
//     }

//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit))
//     }

//     if (sortedProducts.length < 1) {
//         // res.status(200).send('no products matched your search criteria')
//         return res.status(200).json({ success: true, data: [] })
//     }

//     res.status(200).json(sortedProducts)
// })

// app.listen(5000, ()=>{
//     console.log('server is listening on port 5000')
// })