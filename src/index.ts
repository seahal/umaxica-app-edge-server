import { Hono } from 'hono'
//
// const app = new Hono()
//
// app.get('/', (c) => {
//   return c.text('Hello Hono! 2')
// })
//
// app.get('/security.txt', (c) => {
//   return c.text('Contact: https://www.umaxica.com/report-vuln\n' +
//       'Preferred-Languages: ja, en')
// })

const app = new Hono({
  getPath: (req) => req.url.replace(/^https?:\/([^?]+).*$/, '$1'),
})

app.get('/umaxica.com/', (c) => c.text('hello com'))
app.get('/umaxica.com/robots.txt', (c) => c.text('User-agent: *\nAllow: /'))

app.get('/umaxica.app/', (c) => c.text('hello app'))
app.get('/umaxica.app/robots.txt', (c) => c.text('User-agent: *\nAllow: /'))

app.get('/umaxica.org/', (c) => c.text('hello org'))
app.get('/umaxica.org/robots.txt', (c) => c.text('User-agent: *\nAllow: /'))

export default app
