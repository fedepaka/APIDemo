'use strict';
module.exports = (sequelize, DataTypes) => {
  var Club = sequelize.define('Club', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Club.associate = function(models) {
    // associations can be defined here
  };
  return Club;
};