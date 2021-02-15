const express = require('express')
const cards = express.Router()
const Card = require('../models/card.js')
const cardSeed = require('../models/card_seed.js')

cards.get('/', (req, res) => {
    Card.find({}, (err, foundCards) => {
      res.json(foundCards)
  })
})

cards.post('/', (req, res) => {
  Card.create(req.body, (err, createdCard) => {
    Card.create(req.body, (err, createdCard) => {
        Card.find({}, (err, foundCards) => {
            res.json(foundCards)
        })
    })
  })
})

cards.put('/:name', (req, res) => {
  Card.UpdateMany(
    req.params.name,
    req.body,
    { new: true },
    (err, updatedCard) => {
      if (err) {
        res.send(err)
      } else {
        Card.find({}, (err, foundCards) => {
          res.json(foundCards)
        })
      }
    }
  )
})

//https://a-z-animals.com/media/2021/01/mammals-400x300.jpg
//https://www.cdc.gov/coronavirus/2019-ncov/images/daily-life-coping/tiger-medium.JPG

cards.delete('/:id', (req, res) => {
  Card.findByIdAndRemove(req.params.id, (err, deletedCard) => {
    Card.find({}, (err, foundCards) => {
      res.json(foundCards)
    })
  })
})

cards.get('/seed', (req, res) => {
  Card.insertMany(cardSeed, (err, manyCards) => {
    res.redirect('/cards')
  })
})

cards.get('/dropcollection', (req, res) => {
  Card.collection.drop()
  res.redirect('/cards')
})

module.exports = cards
