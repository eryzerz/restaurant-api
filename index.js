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
    router.get('/category/:id', categoryController.getById)

    //Menus API
    router.get('/menus', menuController.list)
    router.get('/menu/:id', menuController.getById)
    router.get('/menus/:id', menuController.getMenuByCategory)
    router.post('/menus', menuController.create)

    //Orders API
    router.get('/orders', orderController.list)
    router.get('/order/:id', orderController.getById)
    router.get('/order/transaction/:id', orderController.getByTransId)
    router.post('/orders', orderController.store)
    router.patch('/order/:id', orderController.update)

    //Transactions API
    router.post('/transactions', transactionController.store)
    router.patch('/transaction/:id', transactionController.update)
    router.get('/transactions', transactionController.list)
    router.get('/transaction/order/:id', transactionController.show)

})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})