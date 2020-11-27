/* eslint-disable max-len */
/* eslint-disable sort-vars */
/* eslint-disable sort-keys */
const mongoose = require('mongoose');
// eslint-disable-next-line no-mixed-requires
const { User } = require('../src/data/user'),

 connectionParams = {
    'useNewUrlParser': true,
    'useCreateIndex': true,
    'useUnifiedTopology': true
},

 // eslint-disable-next-line no-process-env
 connectDb = () => mongoose.connect(process.env.DB_CONNECTION, connectionParams),

 models = { User };

module.exports = {
    connectDb,
    models
};
