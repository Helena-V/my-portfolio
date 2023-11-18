const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    content: Array,
    contact: Array
})

module.exports = mongoose.model('Data', schema)