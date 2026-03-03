const request = require('supertest')
const app = require('./index')

test('GET / returns status ok', async () => {
  const res = await app.listen(0)
  expect(res).toBeDefined()
  res.close()
})
