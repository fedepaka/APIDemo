// modelo de datos para el usuario
// se importa la configuración de conexión de base de datos
var Sequelize = require('sequelize');
var connection = require('../configuration');

var db = {};

db.Task = connection.sequelize.define('Task', {
    idTask: {
        type: Sequelize.DataTypes.BIGINT(),
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
    },
    deleted:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
});


module.exports = db;


