import { Hono } from 'hono'
import { secureHeaders } from 'hono/secure-headers'
import { logger } from 'hono/logger'
import { languageDetector } from 'hono/language'
import { compress } from 'hono/compress'

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
app.get('/umaxica.com/sitemap.xml', (c) => c.text(''))

app.get('/umaxica.app/', (c) => c.text('hello app'))
app.get('/umaxica.app/robots.txt', (c) => c.text('User-agent: *\nAllow: /'))
app.get('/umaxica.com/sitemap.xml', (c) => c.text(''))

app.get('/umaxica.org/', (c) => c.text('hello org'))
app.get('/umaxica.org/robots.txt', (c) => c.text('User-agent: *\nAllow: /'))
app.get('/umaxica.org/sitemap.xml', (c) => c.text(''))

app.get('/localhost:8787/', (c) => c.text('aaa'))

app.use(secureHeaders());
app.use(logger())
app.use(
  languageDetector({
    supportedLanguages: ['en', 'ja'], // Must include fallback
    fallbackLanguage: 'ja', // Required
  })
)
app.use(compress())

export default app
