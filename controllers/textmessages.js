require('dotenv').config()
const { text } = require('express')
const models = require('../models')
const TextMessage = require('../models/textmessages')

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN)

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
  const { to, body } = req.body

  res.header('Content-Type', 'application/json')
  models.TextMessage
    .create({
      messageRecipient: to,
      messageBody: body,
      messageStatus: 'Undelivered'
    })
    .then(({ dataValues, dataValues: { id } }) => {
      client.messages
        .create({
          from: process.env.TWILIO_PHONE_NUMBER,
          to,
          body
        })
        .then(async () => {
          console.log(dataValues)
          await models.TextMessage.update({ messageStatus: 'successful' }, { where: { id } })
          res.send(JSON.stringify({ success: true }))
        })
        .catch(err => {
          console.log(err)
          models.TextMessage.update({ messageStatus: 'undelivered' }, { where: { id } })

          return res
            .status(400)
            .send('We could not send the text message')
        })
    })
    .catch(err => {
      return res.status(400).send('We could not save the text message!')
    })
}

module.exports = { getAllMessages, getMessageById, createNewMessage }
