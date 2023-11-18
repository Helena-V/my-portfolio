const config = require('./utils/config.js')
const express = require('express')
const app = express()
const cors = require('cors')
const messageRouter = require('./controllers/messageController.js')
const dataRouter = require('./controllers/dataController.js')
const mongoose = require('mongoose')
const Data = require('./models/data.js')


mongoose.set('strictQuery', false)

const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI)
    } catch (error) {
        console.log(error)
    }
}
connectToDatabase()


const unknownRoute = (request, response) => {
    response.status(404).send({ error: 'no such resource' })
}

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use('/api/data', dataRouter)
app.use('/api/message', messageRouter)
app.use(unknownRoute)

module.exports = app
