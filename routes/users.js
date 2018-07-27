var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource PAKA');
    connection.query('SELECT * from user', function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            //If there is no error, all is good and response is 200OK.
        }
    });

    // res.send(JSON.stringify({"status": 200, "error": null, "response": [
    //     {userId: 3, name: 'silvana', lastname: 'ridruejo'},
    //     {userId: 4, name: 'malena', lastname: 'ramirez'},
    //     {userId: 5, name: 'pedro', lastname: 'ramirez'},
    //     {userId: 6, name: 'simón', lastname: 'ramirez'}
    //     ]}));
});

router.post('/', function (req, res) {
    console.log(req.body);
    res.send('Hello i´m a post method');
});

router.put('/:id', function (req, res) {
    const id = req.params.id;
    console.log(req.body);
    console.log('soy el id: ' + id);
    res.send('Hello i´m a put method');
});

router.delete('/:id', function (req, res) {
    const id = req.params.id;
    console.log('soy el id: ' + id);
    res.send('Hello i´m a delete method');
});

module.exports = router;
