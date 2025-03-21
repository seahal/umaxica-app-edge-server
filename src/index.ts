import { Hono } from 'hono'

const app = new Hono({
  getPath: (req) => req.url.replace(/^https?:\/([^?]+).*$/, '$1'),
})

app.get('/umaxica.com/', (c) => c.text('hello com'))
app.get('/umaxica.app/', (c) => c.text('hello app'))
app.get('/umaxica.org/', (c) => c.text('hello org'))

export default app
