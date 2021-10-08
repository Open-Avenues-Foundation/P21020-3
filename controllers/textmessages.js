const models = require('../models')


const getAllMessages = async (req, res) => {
  const messages = await models.TextMessage.findAll()

  return res.send(messages)
}

const getMessageById = async (req, res) => {
  const { id } = req.params

  const foundMessage = await models.TextMessage.findOne({ where: { id }, })

  return foundMessage
    ? res.send(foundMessage)
    : res.sendStatus(404)
}

const createNewMessage = async (req, res) => {
  const {
    messageBody, messageStatus
  } = res.body

  // eslint-disable-next-line max-len
  if (!messageBody || !messageStatus) return res.status(400).send('The following fields are required: message body, messageStatus')

  const newMessage = await models.TextMessage.create({
    messageBody, messageStatus
  })

  return res.status(201).send(newMessage)
}

module.exports = { getAllMessages, getMessageById, createNewMessage }
