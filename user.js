'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
    	type: DataTypes.STRING(255),
      allowNull: false      
    },    
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: { isNumeric: true },
      unique: true
    },
    email: {    	
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: { isEmail: true },
      unique: true
    },
    password: {
      type: DataTypes.STRING(20),
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

  return User;
};
