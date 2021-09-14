const models = require('../models')
const TextMessage = require('../models/textmessages')

const getAllMessages = async (req, res) => {
    const messages = await models.TextMessage.findAll()

    return res.send(messages)
}

const getMessageById = async (req, res) => {
    const { id } = req.params

    const foundMessage = await models.TextMessage.findOne({ where: { id } })

    return res.send(foundMessage)
}

const createNewMessage = async (req, res) => {
    const { subject, messageBody } = res.body

    if (!subject || !messageBody)
    return res.status(400).send('The following fields are required: subject, message body')

    const newMessage = await models.TextMessage.create({ subject, messageBody })

    return res.status(201).send(newMessage)

}

module.exports = { getAllMessages, getMessageById, createNewMessage }