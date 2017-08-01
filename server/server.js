const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var scoreboard = ['Miso', 'Jozo', 'Fero'];

app.get('/rest/scoreboard', function(req, res) {
    res.json(scoreboard);
});

app.post('/rest/scoreboard', function(req, res) {
    console.log("post", req.body.name);
    scoreboard.push(req.body.name);

    res.statusCode = 201;
    res.json(req.body.name);
});

app.delete('/rest/scoreboard/:id', function(req, res) {
    var index = goods.findIndex(x => x.id == req.params.id);
    goods.splice(index, 1);

    res.end();
});

app.put('/rest/scoreboard/:id', function(req, res) {
    tovar = goods.find(x => x.id == req.params.id);
    tovar.tovar = req.body.tovar;
    tovar.ks = req.body.ks;

    // status 404 if error

    res.json(t);
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
})