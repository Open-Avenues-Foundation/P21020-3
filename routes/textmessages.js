// const { app } = require('express')
const { getAllMessages, getMessageById, createNewMessage } = require('../controllers/textmessages')



const textMessageRoutes = (app) => {
  app.get('/messages', getAllMessages)
  app.get('/messages/:id', getMessageById)

  app.post('/newmessage', createNewMessage)
}

module.exports = textMessageRoutes
