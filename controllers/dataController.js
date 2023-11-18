const dataRouter = require('express').Router()
const Data = require('../models/data.js')

dataRouter.get('/', async (request, response) => {
    const data = await Data.find({})
    console.log(data)
    if (data.length === 0) {
        return response.status(404).json({ error: 'no data found' })
    }
    return response.status(200).json(data.map(unit => unit.toJSON()))
})

dataRouter.get('/content', async (request,response) => {
    const data = await Data.find({})
    const content = data[0].content
    if (data.length === 0) {
        return response.status(404).json({ error: 'no data found' })
    }
    return response.status(200).json(content)
})

dataRouter.get('/content/boxes', async (request,response) => {
    const data = await Data.find({})
    const content = data[0].content[0]
    if (data.length === 0) {
        return response.status(404).json({ error: 'no data found' })
    }
    return response.status(200).json(content)
})

dataRouter.get('/content/boxes/EnglishContent', async (request,response) => {
    const data = await Data.find({})
    const content = data[0].content[0].EnglishContent
    if (data.length === 0) {
        return response.status(404).json({ error: 'no data found' })
    }
    return response.status(200).json(content)
})

dataRouter.get('/content/boxes/FinnishContent', async (request,response) => {
    const data = await Data.find({})
    const content = data[0].content[0].FinnishContent
    if (data.length === 0) {
        return response.status(404).json({ error: 'no data found' })
    }
    return response.status(200).json(content)
})

dataRouter.get('/content/quiz', async (request,response) => {
    const data = await Data.find({})
    const content = data[0].content[1]
    if (data.length === 0) {
        return response.status(404).json({ error: 'no data found' })
    }
    return response.status(200).json(content)
})

dataRouter.get('/contact', async (request, response) => {
    const data = await Data.find({})
    const contact = data[0].contact
    if (data.length === 0) {
        return response.status(404).json({ error: 'no data found' })
    }
    return response.status(200).json(contact)
})

dataRouter.put('/:id', async (request, response) => {
    try {
        const data = request.body
        await Data.updateOne({ _id: request.params.id })
        return response.status(201).end()
    } catch (error) {
        console.log(error)
        return response.status(400).json({ error: error.message })
    }

})



module.exports = dataRouter