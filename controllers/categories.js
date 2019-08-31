const Sequelize = require('sequelize')

const Category = require('../models').category
const CategoryMenu = require('../models').categoriesmenus


exports.list = (req, res) => {
    Category.findAll({})
        .then(category => res.status(200).send(category))
        .catch(err => res.status(400).send(err))
}

exports.getById = (req, res) => {
    const id = req.params.id
    Category.findOne({ where: {id}})
        .then(category => {
            return res.status(200).send(category)
        })
        .catch(err => res.status(400).send(err))
}

exports.categoryMenu = (req, res) => {
    CategoryMenu.findAll({})
        .then(item => res.status(200).send(item))
        .catch(err => res.status(400).send(err))
}