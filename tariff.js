'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tariff = sequelize.define('Tariff', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    idStorageSender: {
      type: DataTypes.INTEGER(11),
      foreignKey:true,
      allowNull:false,
      references: {
        model:'Storages',
        key: 'id'
      }
    },
    idStorageReceiver: {
      type: DataTypes.INTEGER(11),
      foreignKey:true,
      allowNull:false,
      references: {
        model:'Storages',
        key: 'id'
      }
    },
    minWeight: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    maxWeight: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    fragile: {
      type: DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: false
    },
    price: {
      type: DataTypes.INTEGER(15),
      allowNull: false
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

  return Tariff;
};