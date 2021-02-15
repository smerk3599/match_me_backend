const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    name: {type:String, required: true, default: 'King of Hearts'},
    front: { type: String, default: 'https://media.istockphoto.com/vectors/king-of-hearts-playing-card-in-blue-vector-id165644140?b=1&k=6&m=165644140&s=170667a&h=5QkknhWw6pA0K3HXkAXxfOKhSL3KuxVOG4v56XSILpQ=' },
    back: {type: String, default: 'https://i.pinimg.com/originals/b8/11/a5/b811a58a20c1b74d1179f44771747d76.jpg'},
    status: {type: String, default: "back"}
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card
