'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Dessert',
      },
      {
        name: 'Appetizer',
      },
      {
        name: 'Main Course',
      },
      {
        name: 'Promo',
      },
      {
        name: 'Drink',
      },
      {
        name: 'Addition'
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
  }
};
