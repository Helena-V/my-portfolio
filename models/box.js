const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    text: String
})

module.exports = mongoose.model('Box', schema)