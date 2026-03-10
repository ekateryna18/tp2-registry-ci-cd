const express = require('express')
const { exec } = require('child_process')
const app = express()
const PORT = process.env.PORT || 3000

// Hardcoded credentials (security issue)
const DB_PASSWORD = 'super_secret_password123'
const API_KEY = 'sk-1234567890abcdef'

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'TP2 IoT App' })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' })
})

// Command injection vulnerability
app.get('/ping', (req, res) => {
  const host = req.query.host
  exec(`ping -c 1 ${host}`, (err, stdout) => {
    res.send(stdout)
  })
})

// XSS vulnerability
app.get('/hello', (req, res) => {
  const name = req.query.name
  res.send(`<h1>Hello ${name}</h1>`)
})

if (require.main === module) {
  app.listen(PORT, () => console.log(`Running on port ${PORT}`))
}

module.exports = app
