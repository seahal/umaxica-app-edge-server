import { languageDetector } from "hono/language";
import { Hono } from "hono/quick";
import { cors } from "hono/cors";
import { compress } from "hono/compress";
import { csrf } from "hono/csrf";
import { timeout } from "hono/timeout";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { trimTrailingSlash } from "hono/trailing-slash";
import { secureHeaders } from "hono/secure-headers";

// const app = new Hono({
// 	getPath: (req) => req.url.replace(/^https?:\/([^?]+).*$/, "$1"),
// });
const app = new Hono({ strict: true });

app.use(
	languageDetector({
		supportedLanguages: ["en", "ja"], // Must include fallback
		fallbackLanguage: "ja", // Required
	}),
);
app.use(secureHeaders());
app.use(cors());
app.use(compress());
app.use(csrf());
app.use(timeout(2000));
app.use(logger());
app.use(prettyJSON());
app.use(trimTrailingSlash());

// app.get("/jp.umaxica.com/", (c) => {
// 	c.header('Content-Type', 'text/plain; charset=UTF-8')
// 	return c.text("Welcome to jp.umaxica.app, the corporation page of Umaxica.")});
// app.get("/jp.umaxica.app/", (c) => c.html("Welcome to jp.umaxica.app, the service page of Umaxica."));
// app.get("/jp.umaxica.org/", (c) => c.html("Welcome to jp.umaxica.app, the staff's page of Umaxica."));
// // app.notFound((c) => {
// // 	return c.text("Custom 404 Message", 404);
// // });
// app.get("/localhost:8787/lang", (c) => {
// 	const lang = c.get("language");
// 	return c.text(`Hello! Your language is ${lang}`);
// });
app.get("/", (c) => {
    c.header('Content-Type', 'text/html; charset=UTF-8')
    return c.html(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Hono App</title>
      </head>
      <body>
        <p>Cloudflare</p>
      </body>
    </html>
  `);
});


export default app;

