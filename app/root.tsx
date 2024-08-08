import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";
import "./tailwind.css";

export function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Learning Remix | </title>
            <Meta/>
            <Links/>
        </head>
        <body>
        <h1>Remix and Rails Project</h1>
        <hr/>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}
