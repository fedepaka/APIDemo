var express = require('express');
var router = express.Router();
var dataModel = require('../models/tasks');
var Sequelize = require('sequelize');

const Op = Sequelize.Op;

// /* GET tasks listing. */
// router.get('/', function(req, res, next) {
//     //res.send('respond with a resource PAKA');
//     connection.query('SELECT * from tasks', function (error, results) {
//         if(error){
//             res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
//             //If there is error, we send the error in the error section with 500 status
//         } else {
//             res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//             //If there is no error, all is good and response is 200OK.
//         }
//     });
// });
//
// router.post('/', function (request, result) {
//     //parse an verify rigth data from client. If no ok, thow an error
//     // todo: check array of object from client
//
//     if (request.body.length > 0) {
//
//         const task = { title: request.body[0].title, description: request.body[0].description };
//
//         connection.query('INSERT INTO tasks SET ? ;', task, function (error, results) {
//             if (error) { result.send({ error: error }) };
//
//             if (results) {
//                 // {
//                 //     "fieldCount": 0,
//                 //     "affectedRows": 1,
//                 //     "insertId": 3,
//                 //     "serverStatus": 2,
//                 //     "warningCount": 0,
//                 //     "message": "",
//                 //     "protocol41": true,
//                 //     "changedRows": 0
//                 // }
//                 result.send({idTask: results.insertId})
//             }
//         });
//     }
//
// });
//
// router.put('/:id', function (request, response) {
//     if (request && request.body) {
//         const id = request.params.id;
//         const task = { title: request.body[0].title, description: request.body[0].description };
//
//         connection.query('UPDATE tasks set ? WHERE idTask = ?', [task, id], function (error, results) {
//             if (error) { response.send({ error: error }) };
//
//             if (results) {
//                 response.send({changedRows: results.changedRows})
//             }
//         });
//     } else {
//         response.send(JSON.stringify({"status": 500, "error": null, "response": null, message: "No Body Specified"}));
//     }
// });
//
// router.delete('/:id', function (request, response) {
//
//     if (request) {
//         const id = request.params.id;
//
//         connection.query('DELETE from tasks WHERE idTask = ?', id, function (error, results) {
//             if (error) { response.send({ error: error }) };
//
//             if (results) {
//                 response.send({rowsAffected: results.rowsAffected})
//             }
//         });
//     } else {
//         response.send(JSON.stringify({"status": 200, "error": null, "response": null, message: "No data to delete"}));
//     }
// });

router.get('/', function(request, response) {
    dataModel.Task.findAll().then(function (usuarios) {
        response.send(usuarios);
    })
});

router.post('/', function(request, response) {
    if (request && request.body) {
        const task = {
            title: request.body[0].title,
            description: request.body[0].description,
            createdAt: new Date()
        };

        dataModel.Task.create(task).then(function (created) {
            response.send(created);
        });

    } else {
        response.send(JSON.stringify({"status": 500, "error": null, "response": null, message: "No Body Specified"}));
    }

});

router.put('/:id', function (request, response) {
    if (request && request.body) {
        const id = request.params.id;
        //const task = { title: request.body[0].title, description: request.body[0].description };
        const task = {
            title: request.body[0].title,
            description: request.body[0].description,
            updatedAt: new Date()
        };

        dataModel.Task.update(task
            , { where:
                    { idTask:
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
            deleted: true,
            updatedAt: new Date()
        };

        dataModel.Task.update(toUpdate
            , { where:
                    { idTask:
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
