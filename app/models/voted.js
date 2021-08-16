'use strict';

module.exports = (sequelize, DataTypes) => {

  const voted = sequelize.define('voteds', {
    noktp: {
      type: DataTypes.STRING,
    },
    pilih: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "voteds"
  });

  voted.associate = function(models) {
    voted.belongsTo(models.votes, { foreignKey: "voteId"})
    voted.belongsTo(models.calons, { foreignKey: "calonId"})
  };

  return voted;
};

