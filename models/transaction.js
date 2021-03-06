'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    tableNumber: DataTypes.INTEGER,
    finishedTime: DataTypes.STRING,
    subtotal: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
    serviceCharge: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    total: DataTypes.DOUBLE,
    isPaid: DataTypes.INTEGER
  }, {});
  transaction.associate = function(models) {
    transaction.hasMany(models.order, {
      foreignKey: 'transactionId'
    })
  };
  return transaction;
};