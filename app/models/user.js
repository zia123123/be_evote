'use strict';

module.exports = (sequelize, DataTypes) => {

  const user = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    noktp: {
      type: DataTypes.STRING,
    },
    archived:{
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: "users"
  });

  user.associate = function(models) {
  };

  return user;
};