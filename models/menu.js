'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    imageURL: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  menu.associate = function(models) {
    menu.belongsTo(models.category, {
      foreignKey: 'categoryId'
    })
  };
  return menu;
};