const Sequelize = require('sequelize')

const Menu= require('../models').menu


exports.list = (req, res) => {
    Menu.findAll({})
        .then(menu => res.status(200).send(menu))
        .catch(err => res.status(400).send(err))
}

