const mongoose = require('mongoose')
const {User} = require('../src/data/user')

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const connectDb = () => {
    return mongoose.connect(process.env.DB_CONNECTION, connectionParams)
}

const models = {User}

module.exports = {
    connectDb, 
    models
}