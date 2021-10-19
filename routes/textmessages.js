// const { app } = require('express')
const { getAllMessages, getMessageById, createNewMessage, saveNewMessage } = require('../controllers/textmessages')

const textMessageRoutes = (app) => {
  app.get('/messages', getAllMessages)
  app.get('/messages/:id', getMessageById)

  app.post('/newmessage', createNewMessage)
  app.post('/savemessage', saveNewMessage)
}

module.exports = textMessageRoutes
