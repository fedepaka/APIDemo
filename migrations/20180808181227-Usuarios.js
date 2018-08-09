'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addColumn('Usuarios',
          'idRole',
          {
              type: Sequelize.BIGINT,
              allowNull: false,
              references: { model: 'Roles', key: 'idRole' }
          }
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Usuarios', 'idRole');
  }
};
