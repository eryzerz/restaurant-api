'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categoriesmenus', [
      {
        categoryId: 1,
        menuId: 1
      },
      {
        categoryId: 1,
        menuId: 2
      },
      {
        categoryId: 2,
        menuId: 4
      },
      {
        categoryId: 5,
        menuId: 3
      },
      {
        categoryId: 4,
        menuId: 2
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categoriesmenus')
  }
};
