var express = require('express');
var dataModel = require('../models/usuarios');
var router = express.Router();
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
var Boom = require('boom');

router.get('/', function (request, response, next) {
    const validation = validarNombre(request.query.nombre);
    if(validation.length)
    {
        const error = Boom.badRequest(validation);
        error.output.statusCode = 455;    // Assign a custom error code
        error.reformat();
        error.output.payload.custom = 'este es el error detallado'; // Add custom key
        return next(error);
    }

    dataModel.Usuario.ObtenerUsuarios(function(err, usuarios) {
        if (err) return next(err);
        response.send(usuarios);
    });
});

router.get('/:id', function (request, response, next) {
    const id = request.params.id;

    if (!id || !Number(id)) {
        const error = Boom.badRequest('el parámetro id es incorrecto.');
        error.output.statusCode = 456;    // Assign a custom error code
        error.reformat();
        error.output.payload.custom = 'este es el error detallado'; // Add custom key
        return next(error);
    }
    else {
        dataModel.Usuario.UsuarioPorId(function(err, usuario) {
            if (err) return next(err);
            response.send(usuario);
        }, id);
    }
});

router.post('/', function (request, response, next) {
    if (request && request.body) {
        const usuario = {
            nombre: request.body.nombre,
            apellido: request.body.apellido,
            fechaNacimiento: request.body.fechaNacimiento,
            createdAt: new Date()
        };

        dataModel.Usuario.create(usuario).then(function (created) {
            response.send(created);
        }).catch(function (err) {
            // handle error;
            if (err) {
                err.httpStatusCode = 500
                return next(err)
            }
        });

    } else {
        //response.send(JSON.stringify({"status": 500, "error": null, "response": null, message: "No Body Specified"}));
        const error = new Error('No Body Specified');
        error.httpStatusCode = 500;
        return next(error);
    }

});

router.put('/:id', function (request, response) {
    if (request && request.body) {
        const id = request.params.id;
        const usuario = {
            nombre: request.body.nombre,
            apellido: request.body.apellido,
            fechaNacimiento: request.body.fechaNacimiento,
            createdAt: new Date()
        };

        dataModel.Usuario.update(usuario
            , {
                where:
                    {
                        idUsuario:
                            {[Op.eq]: id}
                    }
            }).then(function (updated) {
            response.send(updated);
        });

    } else {
        response.send(JSON.stringify({"status": 500, "error": null, "response": null, message: "No Body Specified"}));
    }
});

router.delete('/:id', function (request, response) {

    if (request) {
        const id = request.params.id;

        let toUpdate = {
            eliminado: true,
            updatedAt: new Date()
        };

        dataModel.Usuario.update(toUpdate
            , {
                where:
                    {
                        idUsuario:
                            {[Op.eq]: id}
                    }
            }).then(function (updated) {
            response.send(updated);
        })
    } else {
        response.send(JSON.stringify({"status": 500, "error": null, "response": null, message: "No data to delete"}));
    }
});

// ejemplo simple de validación
function validarNombre(nombre){
    if(!nombre) return "El nombre ingresado es incorrecto";

    if(nombre.length > 5) return "El nombre no puede ser tan largo";

    return "";
}

module.exports = router;