'use strict';
module.exports = (sequelize, DataTypes) => {
  var RouteList = sequelize.define('RouteList', {
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
    expectingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    actualDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idSending: {
      type: DataTypes.INTEGER(11),
      foreignKey:true,
      allowNull:false,
      references: {
        model:'Sendings',
        key: 'id'
      }
    },
    idTransport: {
      type: DataTypes.INTEGER(11),
      foreignKey:true,
      allowNull:false,
      references: {
        model:'Transports',
        key: 'id'
      }
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

  return RouteList;
};
