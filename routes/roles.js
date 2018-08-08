var express = require('express');
var dataModel = require('../models/roles');
var router = express.Router();
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', function (request, response, next) {
    // const validation = validarNombre(request.query.nombre);
    // if(validation.length)
    // {
    //     const error = Boom.badRequest(validation);
    //     error.output.statusCode = 455;    // Assign a custom error code
    //     error.reformat();
    //     error.output.payload.custom = 'este es el error detallado'; // Add custom key
    //     return next(error);
    // }

    dataModel.Role.GetRoles(function(err, roles) {
        if (err) return next(err);
        response.send(roles);
    });
});

module.exports = router;