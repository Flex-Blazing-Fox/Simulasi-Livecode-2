'use strict';
const bcrypt = require("bcryptjs")
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    } 
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(user.password, salt)
        user.password = hash
      },
    },
  });
  User.associate = function(models){
    User.hasMany(models.Inventory,{foreignKey:"userId"})
  }
  return User;
};