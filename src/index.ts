import { Hono } from 'hono'
import { languageDetector } from 'hono/language'
import { secureHeaders } from 'hono/secure-headers'

const app = new Hono({
  getPath: (req) => req.url.replace(/^https?:\/([^?]+).*$/, '$1'),
})

app.use(
  languageDetector({
    supportedLanguages: ['en', 'ja'], // Must include fallback
    fallbackLanguage: 'ja', // Required
  })
)
app.get('/umaxica.com/', (c) => c.text('hello com'))
app.get('/umaxica.app/', (c) => c.text('hello app'))
app.get('/umaxica.org/', (c) => c.text('hello org'))
app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})
app.get('/localhost:8787/lang', (c) => {
  const lang = c.get('language')
  return c.text(`Hello! Your language is ${lang}`)
})

app.use(secureHeaders())


export default app
