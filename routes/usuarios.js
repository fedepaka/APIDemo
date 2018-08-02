var express = require('express');
var dataModel = require('../models/usuarios');
var router = express.Router();

router.get('/', function(request, response) {
    dataModel.Usuario.findAll().then(function (usuarios) {
        response.send(usuarios);
    })
});

router.post('/', function(request, response) {
    dataModel.Usuario.create(request.body).then(function (created) {
        response.send(created);
    })
});

module.exports = router;