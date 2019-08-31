'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  menu.associate = function(models) {
    menu.belongsToMany(models.category, {
      through: 'categoryMenu',
      foreignKey: 'menuId'
    })
  };
  return menu;
};