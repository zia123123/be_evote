'use strict';

module.exports = (sequelize, DataTypes) => {

  const validate = sequelize.define('validates', {
    noktp: {
      type: DataTypes.STRING,
      unique: true
    },
    nama: {
      type: DataTypes.STRING,
    },
    status:{
      type: DataTypes.BOOLEAN,
    },
    rt:{
      type: DataTypes.INTEGER,
    },
    archived:{
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: "validates"
  });

  validate.associate = function(models) {
  };

  return validate;
};