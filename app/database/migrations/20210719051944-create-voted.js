'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('voteds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      noktp: {
        type: Sequelize.STRING
      },
      voteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "votes",
          key: "id"
        }
      },
      pilih: {
        type: Sequelize.STRING
      },
      calonId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "calons",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('voteds');
  }
};