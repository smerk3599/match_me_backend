// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

// LISTENER
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
