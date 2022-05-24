import { test } from '@japa/runner'

test('create new retailer', async ({ client }) => {
  const response = await client.post('/retailers').json({ name: 1 })
  response.assertBody({ errors: [] })
  response.assertStatus(200)
})
