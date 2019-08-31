'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoryMenu = sequelize.define('categoryMenu', {
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
  categoryMenu.associate = function(models) {
    
  };
  return categoryMenu;
};