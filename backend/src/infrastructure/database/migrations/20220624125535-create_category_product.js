'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('category_products', {
      id_category: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_status: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('category_products');
  }
};
