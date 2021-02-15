const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    name: {type:String, required: true, default: 'King of Hearts'},
    image: { type: String, default: 'https://media.istockphoto.com/vectors/king-of-hearts-playing-card-in-blue-vector-id165644140?b=1&k=6&m=165644140&s=170667a&h=5QkknhWw6pA0K3HXkAXxfOKhSL3KuxVOG4v56XSILpQ=' },
    isFlipped: {type: Boolean, default: false}
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card
