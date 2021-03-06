const Sequelize = require('sequelize')

const Order = require('../models').order
const Menu = require('../models').menu


exports.store = (req, res) => {
    Order.create(req.body)
        .then(order => res.status(201).send(order))
        .catch(err => res.status(400).send(err))
}

exports.update = (req, res) => {
    Order.findOne({ where: {id: req.params.id }})
        .then(order => {
            return order.update(req.body)
                .then(order => res.status(200).send(order))
                .catch(err => res.status(400).send(err)) 
        })
        .catch(err => res.status(400).send(err))
}

exports.list = (req, res) => {
    Order.findAll({})
        .then(order => res.status(200).send(order))
        .catch(err => res.status(400).send(err))
}

exports.getById = (req, res) => {
    Order.findOne({ where: {id: req.params.id}})
        .then(order => res.status(200).send(order))
        .catch(err => res.status(400).send(err))
}

exports.getByTransId = (req, res) => {
    Order.findAll({
        include: [
            {
                model: Menu
            }
        ],
        where: { transactionId: req.params.id}
    })
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err))
}