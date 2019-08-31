const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const categoryController = require('./controllers/categories')
const menuController = require('./controllers/menus')
const orderController = require('./controllers/orders')
const transactionController = require('./controllers/transactions')

const app = express()

const PORT = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.send('Welcome to RESTaurant API!')
})

app.group('/api/v1', (router) => {

    //Categories API
    router.get('/categories', categoryController.list)
    router.get('/categories/detail', categoryController.categoryMenu)
    router.get('/category/:id', categoryController.getById)

    //Menus API
    router.get('/menus', menuController.list)

    //Orders API


    //Transactions API


})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})