var app = require('../app');


app.param('id', function (req, res, next, id) {
    if (notValid(id)) {
        return res.send(400, "invalid id");
    }
    next();
});

function notValid(id){
    if(!id) return false;

    if(!Number(id)) return false;

    if(Number(id) <= 0) return false;
}

module.exports = app;