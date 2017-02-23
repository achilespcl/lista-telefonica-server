var app = require('./app_config.js');
var db = require('./db_config.js');
var path = require('path');
var contactCtrl = require('./controller/ContactController.js');
var providerCtrl = require('./controller/ProviderController.js');

var validator = require('validator');

app.get('/', function(req, res) {
    res.end('Servidor ON!');
});

app.get('/contacts', function(req, res) {
    contactCtrl.list(function(resp) {
        res.json(resp);
    });
});

app.get('/providers', function(req, res) {
    providerCtrl.list(function(resp) {
        res.json(resp);
    });
});

app.get('/contacts/:id', function(req, res) {
    var id = validator.trim(validator.escape(req.params.id));
    contactCtrl.contact(id, function(resp) {
        res.json(resp);
    });
});

// Modelo para recuperação de arquivos
// app.get('/lista_telefonica', function(req, res) {
//     res.sendFile(path.join(__dirname + '/www/index.html'));
// });

app.post('/contacts', function(req, res) {
    var name = req.body.name;
    var phone = req.body.phone;
    var provider = req.body.provider;

    contactCtrl.save(name, phone, provider, function(resp) {
        res.json(resp);
    });
});

app.post('/providers', function(req, res) {
    var name = req.body.name;
    var code = req.body.code;
    var category = req.body.category;
    providerCtrl.save(name, code, category, function(resp) {
        res.json(resp);
    });
});

app.put('/contacts', function(req, res) {

    var id = validator.trim(validator.escape(req.body.id));
    var name = validator.trim(validator.escape(req.body.name));
    var phone = validator.trim(validator.escape(req.body.phone));
    var provider = req.body.provider;

    contactCtrl.update(id, name, phone, provider, function(resp) {
        res.json(resp);
    });

});

app.delete('/contacts/:id', function(req, res) {
    var id = validator.trim(validator.escape(req.params.id));

    contactCtrl.delete(id, function(resp) {
        res.json(resp);
    });
});

app.delete('/providers/:id', function(req, res) {
    var id = validator.trim(validator.escape(req.params.id));

    providerCtrl.delete(id, function(resp) {
        res.json(resp);
    });
});