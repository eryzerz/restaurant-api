'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    category.belongsToMany(models.menu, {
      through: 'categoryMenu',
      foreignKey: 'categoryId'
    })
  };
  return category;
};