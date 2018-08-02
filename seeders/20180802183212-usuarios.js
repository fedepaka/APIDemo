// para inicializar las tabla Usuarios
// para ejecutar UP: $sequelize db:seed:all
// para ejecutar DOWN o Rollback:   (1) $sequelize db:seed:undo (para la semilla mas reciente)
//                                  (2) $sequelize db:seed:undo:all (para ejecutar rollback de todos)

'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */

        return queryInterface.bulkInsert('Usuarios', [{
            nombre: 'Malena',
            apellido: 'Ramirez',
            fechaNacimiento: '2010-10-29 13:50:00',
            createdAt: new Date()
        },{
            nombre: 'Pedro',
            apellido: 'Ramirez',
            fechaNacimiento: '2017-12-28 17:50:00',
            createdAt: new Date()
        },{
            nombre: 'Simón',
            apellido: 'Ramirez',
            fechaNacimiento: '2017-12-28 17:50:00',
            createdAt: new Date()
        }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
        return queryInterface.bulkDelete('Usuarios', null, {});

    }
};
