var express = require('express');
var app = module.exports = express();

var db = require('./db_config.js');
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.end('Servidor ON!');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

// app.get('/contacts', function(req, res) {
//     contactCtrl.list(function(resp) {
//         res.json(resp);
//     });
// });

// app.get('/providers', function(req, res) {
//     providerCtrl.list(function(resp) {
//         res.json(resp);
//     });
// });

// app.get('/contacts/:id', function(req, res) {
//     var id = validator.trim(validator.escape(req.params.id));
//     contactCtrl.contact(id, function(resp) {
//         res.json(resp);
//     });
// });

// // Modelo para recuperação de arquivos
// // app.get('/lista_telefonica', function(req, res) {
// //     res.sendFile(path.join(__dirname + '/www/index.html'));
// // });

// app.post('/contacts', function(req, res) {
//     var name = req.body.name;
//     var phone = req.body.phone;
//     var provider = req.body.provider;

//     contactCtrl.save(name, phone, provider, function(resp) {
//         res.json(resp);
//     });
// });

// app.post('/providers', function(req, res) {
//     var name = req.body.name;
//     var code = req.body.code;
//     var category = req.body.category;
//     providerCtrl.save(name, code, category, function(resp) {
//         res.json(resp);
//     });
// });

// app.put('/contacts', function(req, res) {

//     var id = validator.trim(validator.escape(req.body.id));
//     var name = validator.trim(validator.escape(req.body.name));
//     var phone = validator.trim(validator.escape(req.body.phone));
//     var provider = req.body.provider;

//     contactCtrl.update(id, name, phone, provider, function(resp) {
//         res.json(resp);
//     });

// });

// app.delete('/contacts/:id', function(req, res) {
//     var id = validator.trim(validator.escape(req.params.id));

//     contactCtrl.delete(id, function(resp) {
//         res.json(resp);
//     });
// });

// app.delete('/providers/:id', function(req, res) {
//     var id = validator.trim(validator.escape(req.params.id));

//     providerCtrl.delete(id, function(resp) {
//         res.json(resp);
//     });
// });