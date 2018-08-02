// modelo de datos para el usuario
// se importa la configuración de conexión de base de datos
var Sequelize = require('sequelize');
var connection = require('../configuration');

var db = {};

db.Usuario = connection.sequelize.define('Usuario', {
    idUsuario: {
        type: Sequelize.DataTypes.BIGINT(),
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
    },
    apellido: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
    },
    fechaNacimiento: {
        type: Sequelize.DataTypes.DATE(),
        allowNull: false
    },
    eliminado:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
});


module.exports = db;


