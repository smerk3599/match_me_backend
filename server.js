// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')


// CONFIGURATION
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

//MIDDLEWARE
app.use(express.json())

//USE CONTROLLER
const cardsController = require('./controllers/cards_controller.js')
app.use('/cards', cardsController)


const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})


// Error / success
mongoose.connection.on('error', err =>
  console.log(
    err.message,
    'Is Mongod not running?/Or is there a problem with Atlas Connection?'
  )
)
mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


// LISTENER
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
