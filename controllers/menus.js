const Sequelize = require('sequelize')

const Menu= require('../models').menu



exports.list = (req, res) => {
    Menu.findAll({})
        .then(menu => res.status(200).send(menu))
        .catch(err => res.status(400).send(err))
}

exports.getById = (req, res) => {
    Menu.findOne({ where: {id: req.params.id}})
        .then(menu => res.status(200).send(menu))
        .catch(err => res.status(400).send(err))
}

exports.getMenuByCategory = (req, res) => {
    Menu.findAll({
        where: {categoryId: req.params.id}
    })
        .then(menu => res.status(200).send(menu))
        .catch(err => res.status(400).send(err))
}

exports.create = (req, res) => {
    Menu.create(req.body)
        .then(menu => res.status(200).send(menu))
        .catch(err => res.status(400).send(err))
}

