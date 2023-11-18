const messageRouter = require('express').Router()
const Message = require('../models/message.js')

messageRouter.post('/', async (request, response) => {
    try {
        const message = new Message({
            name: request.body.name,
            phone: request.body.phone,
            email: request.body.email,
            content: request.body.content
        })
        const savedMessage = await message.save()
        return response.status(200).end()
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }

})

module.exports = messageRouter