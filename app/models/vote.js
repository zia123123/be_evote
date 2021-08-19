'use strict';

module.exports = (sequelize, DataTypes) => {

  const vote = sequelize.define('votes', {
    judul: {
      type: DataTypes.STRING,
    },
    deskripsi: {
      type: DataTypes.TEXT,
    },
    photo:{
      type: DataTypes.STRING,
    },
    rt:{
      type: DataTypes.INTEGER,
      unique: true
    },
    archived:{
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: "votes"
  });

  vote.associate = function(models) {
    vote.hasMany(models.calons,{ onDelete: 'cascade' }, { foreginKey: "vote"})
    vote.hasMany(models.voteds,{ onDelete: 'cascade' }, { foreginKey: "vote"})
  };

  return vote;
};