var express = require('express');
var dataModel = require('../models/usuarios');
var router = express.Router();
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', function(request, response) {
    dataModel.Usuario.findAll().then(function (usuarios) {
        response.send(usuarios);
    })
});

router.post('/', function(request, response) {
    if (request && request.body) {
        const usuario = {
            nombre: request.body[0].nombre,
            apellido: request.body[0].apellido,
            fechaNacimiento: request.body[0].fechaNacimiento,
            createdAt: new Date()
        };

        dataModel.Usuario.create(usuario).then(function (created) {
            response.send(created);
        });

    } else {
        response.send(JSON.stringify({"status": 500, "error": null, "response": null, message: "No Body Specified"}));
    }

});

router.put('/:id', function (request, response) {
    if (request && request.body) {
        const id = request.params.id;
        const usuario = {
            nombre: request.body[0].nombre,
            apellido: request.body[0].apellido,
            fechaNacimiento: request.body[0].fechaNacimiento,
            createdAt: new Date()
        };

        dataModel.Usuario.update(usuario
            , { where:
                    { idUsuario:
                            { [Op.eq]: id  }
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
            , { where:
                    { idUsuario:
                            { [Op.eq]: id }
                    }
            }).then(function (updated) {
            response.send(updated);
        })
    } else {
        response.send(JSON.stringify({"status": 500, "error": null, "response": null, message: "No data to delete"}));
    }
});

module.exports = router;