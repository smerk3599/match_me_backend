const express = require('express')
const cards = express.Router()

cards.get('/', (req, res) => {
  res.send('index')
})

module.exports = cards
