'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoriesmenus = sequelize.define('categoriesmenus', {
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'menu',
        key: 'id'
      }
    }
  }, {});
  categoriesmenus.associate = function(models) {
    // associations can be defined here
  };
  return categoriesmenus;
};