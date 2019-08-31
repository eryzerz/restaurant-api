const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const categoryController = require('./controllers/categories')
const menuController = require('./controllers/menus')
const orderController = require('./controllers/orders')
const transactionController = require('./controllers/transactions')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.send('Welcome to RESTaurant API!')
})

app.group('/api/v1', (router) => {

    //Categories API
    

    //Menus API


    //Orders API


    //Transactions API


})