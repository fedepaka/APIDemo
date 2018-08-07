// modelo de datos para el usuario
// se importa la configuración de conexión de base de datos
var Sequelize = require('sequelize');
var connection = require('../configuration');
const Op = Sequelize.Op;

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

// obtener todos los usuarios
db.Usuario.ObtenerUsuarios = function(callback) {

    db.Usuario.findAll().then(function (usuarios) {
        callback(null, usuarios);
    }).catch(function (error) {
        callback(error);
    });
};

// obtener
db.Usuario.UsuarioPorId = function(callback, id) {
    db.Usuario.findOne({
        where:
            {
                idUsuario:
                    {[Op.eq]: id}
            }
    }).then(function (usuario) {
        callback(null, usuario);
    }).catch(function (err) {
        callback(err, null);
    });

};

module.exports = db;


