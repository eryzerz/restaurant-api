const Sequelize = require('sequelize')

const Transaction = require('../models').transaction
const Menu= require('../models').menu
const Order = require('../models').order


exports.store = (req, res) => {
    Transaction.create(req.body)
        .then(transaction => res.status(201).send(transaction))
        .catch(err => res.status(400).send(err))
}

exports.update = (req, res) => {
    Transaction.findOne({ where: {id: req.params.id }})
        .then(transaction => {
            return transaction.update(req.body)
        })
        .catch(err => res.status(400).send(err))
}

exports.list = (req, res) => {
    Transaction.findAll({})
        .then(transaction => res.status(200).send(transaction))
        .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    Transaction.findOne({
        include: [
        {
            model: Order,
            include:[
                {model:Menu}
            ]
        }
        ],
        where: { id: req.params.id }
    }).then(data => res.send(data))
}