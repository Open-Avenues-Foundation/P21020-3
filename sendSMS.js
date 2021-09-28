require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

// use those creds to create a twilio REST client
const client = require('twilio')(accountSid, authToken)

// use client to create a message
client.messages.create({
  to: process.env.MY_PHONE_NUMBER,
  from: '+16622402242',
  body: 'hello from the abyss'
})
  .then((message) => console.log(message.sid)) // eslint-disable-line no-console
