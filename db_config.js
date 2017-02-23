// var db_string = 'mongodb://achilespcl:mongodb1@ds161109.mlab.com:61109/lista-telefonica-db';
// var mongoose = require('mongoose');

// /* 
//  * Mongoose by default sets the auto_reconnect option to true.
//  * We recommend setting socket options at both the server and replica set level.
//  * We recommend a 30 second connection timeout because it allows for 
//  * plenty of time in most operating environments.
//  */
// var options = {
//     server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
//     replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
// };

// mongoose.connect(db_string, options);

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Erro ao Conectar ao Banco!'));

// db.once('open', function() {

//     var contactSchema = mongoose.Schema({
//         name: String,
//         phone: String,
//         date: Date,
//         provider: { name: String, code: String, category: String }
//     });

//     var providerSchema = mongoose.Schema({
//         name: String,
//         code: String,
//         category: String
//     });

//     exports.Contact = mongoose.model('Contact', contactSchema);
//     exports.Provider = mongoose.model('Provider', providerSchema);
// });