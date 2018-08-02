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

        return queryInterface.bulkInsert('Tasks', [{
            title: 'Sacar los reciduos',
            description: 'El horario es: de 0 a 8hs de lunes a sábados.',
            createdAt: new Date()
        },{
            title: 'Alimentar al negro.',
            description: 'Antes de salir, al medio día y a la noche.',
            createdAt: new Date()
        },{
            title: 'Hacer dormir a Male',
            description: 'El horario máximo es las 23hs.',
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
        return queryInterface.bulkDelete('Tasks', null, {});

    }
};
