import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hono! from GitHub Actions!'))

export default app