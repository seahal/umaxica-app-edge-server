import {
    ErrorResponse,
    isRouteErrorResponse,
    Links,
    Meta,
    MetaFunction,
    NavLink,
    Outlet,
    Scripts,
    useRouteError
} from "@remix-run/react";
import {LinksFunction} from "@remix-run/node"
import styles from "./tailwind.css";
import {cssBundleHref} from "@remix-run/css-bundle";

export function Layout({children}: { children: React.ReactNode }) {
    return (
        <html>
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        <h1 className="font-sans p-4"><NavLink to='/'>UMAXICA(Remix)</NavLink></h1>
        <hr/>
        {children}
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet/>;
}


export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </>
        );
    }

    return (
        <>
            <h1>Error!</h1>
            <p>{error?.message ?? "Unknown error"}</p>
        </>
    );
}


export const meta: MetaFunction = ({error}) => {
    if (error) {
        return [
            ...((error as ErrorResponse).status === 404 ? [{title: 'UMAXICA | Page Not Found'}] : []),
            {name: 'robots', content: 'noindex, nofollow'},
        ];
    } else {
        return [{title: "UMAXICA"},]
    }
};

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: styles},
    ...(cssBundleHref ? [{rel: "stylesheet", href: cssBundleHref}] : []),
];

// TODO: delete below
export const add = (n: number) => {
    return (n + 1)
}
