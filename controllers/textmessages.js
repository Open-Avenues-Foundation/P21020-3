require('dotenv').config()
const models = require('../models')

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

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

// const createNewMessage = async (req, res) => {
//   const {
//     messageBody, messageStatus
//   } = req.body

//   // eslint-disable-next-line max-len
//   if (!messageBody || !messageStatus) return res.status(400).send('The following fields are required: messageBody, messageStatus')

//   const newMessage = await models.TextMessage.create({
//     messageBody, messageStatus
//   })

//   return res.status(201).send(newMessage)
// }

const createNewMessage = async (req, res) => {
  res.header('Content-Type', 'application/json')

  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }))
    })
    .catch(err => {
      console.log(err)
      res.send(JSON.stringify({ success: false }))
    })
}

module.exports = { getAllMessages, getMessageById, createNewMessage }
