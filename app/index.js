const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'TP2 IoT App' })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' })
})

module.exports = app
