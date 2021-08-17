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
    voted.belongsTo(models.votes,{ onDelete: 'cascade' }, { foreignKey: "voteId"})
    voted.belongsTo(models.calons,{ onDelete: 'cascade' }, { foreignKey: "calonId"})
  };

  return voted;
};

