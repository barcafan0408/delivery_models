'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sending = sequelize.define('Sending', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    number: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: { isNumeric: true }
    },
    status: DataTypes.ENUM('in_processing', 'en_route', 'ready_to_giving'),
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
    weight: {
      allowNull: false,
      type: DataTypes.INTEGER(10)
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER(25)
    },
    coment: {      
      type: DataTypes.STRING(255),
      allowNull: true      
    },
    idUserSender: {
      type: DataTypes.INTEGER(11),
      foreignKey:true,
      allowNull:false,
      references: {
        model:'Users',
        key: 'id'
      }
    },
    idUserReceiver: {
      type: DataTypes.INTEGER(11),
      foreignKey:true,
      allowNull:false,
      references: {
        model:'Users',
        key: 'id'
      }
    },
    fragile: {
      type: DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: false
    },
    cost: {
      allowNull: false,
      type: DataTypes.INTEGER(25)
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

  return Sending;
};