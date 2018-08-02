// se define la conexión con la base de datos, utilizando Sequelize y se exporta la conexión para ser utilizada en la capa de datos
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

var db = {};

db.sequelize = sequelize;
module.exports = db;


