'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transport = sequelize.define('Transport', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    volume: {
      allowNull: false,
      type: DataTypes.INTEGER(10)
    },
    maxWeight: {
      allowNull: false,
      type: DataTypes.INTEGER(10)
    },
    speed: {
      allowNull: false,
      type: DataTypes.INTEGER(5)
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    removeDate: {
      type: DataTypes.DATE
    }
  },
  {timestamps: false} );  

  return Transport;
};
