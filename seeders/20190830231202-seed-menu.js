'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menus', [
      {
        name: 'Tomat Bunder',
        price: 100000
      },
      {
        name: 'Tuan Broko',
        price: 50000
      },
      {
        name: 'Alpokatlipse',
        price: 40000
      },
      {
        name:'Terong Londo',
        price: 40000
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menus', null, {})
  }
};
