'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        menuId: 2,
        transactionId: 1,
        qty: 2,
        price: 50000,
        status: 1
      },
      {
        menuId: 1,
        transactionId: 2,
        qty: 1,
        price: 100000,
        status: 0
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {})
  }
};
