const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// Import routes
const api = require('./routes')

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Use routes
app.use('/api/v1', api)

module.exports = app
