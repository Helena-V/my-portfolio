const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String
    }, 
    phone: {
        type: String
    },
    email: {
        type: String
    }, 
    content: {
        type: String
    }
})

module.exports = mongoose.model('Message', schema)