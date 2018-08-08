// modelo de datos para el usuario
// se importa la configuración de conexión de base de datos
var Sequelize = require('sequelize');
var connection = require('../configuration');
const Op = Sequelize.Op;

var db = {};

db.Role = connection.sequelize.define('Role', {
    idRole: {
        type: Sequelize.DataTypes.BIGINT(),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
    },
    deleted:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
});

// obtener todos los usuarios
db.Role.GetRoles = function(callback) {
    db.Role.findAll().then(function (roles) {
        callback(null, roles);
    }).catch(function (error) {
        callback(error);
    });
};

module.exports = db;


