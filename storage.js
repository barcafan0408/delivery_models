'use strict';
module.exports = (sequelize, DataTypes) => {
  var Storage = sequelize.define('Storage', {
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
    country: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    region: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    street: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    house: {
      allowNull: false,
      type: DataTypes.STRING(10)
    },    
    storageType: DataTypes.ENUM('less_than_30', 'more_than_30'),
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

  return Storage;
};
