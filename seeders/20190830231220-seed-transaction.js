'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('transactions', [
      {
        tableNumber: 1,
        finishedTime: '60',
        subtotal: 100000,
        discount: 0,
        serviceCharge: 0,
        tax: 0,
        total: 100000,
        isPaid: 1,
      },
      {
        tableNumber: 2,
        finishedTime: '73',
        subtotal: 50000,
        discount: 0,
        serviceCharge: 0,
        tax: 0,
        total: 50000,
        isPaid: 0,
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {})
  }
};
