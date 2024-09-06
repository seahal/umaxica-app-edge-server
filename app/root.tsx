import {
    Links,
    Meta,
    Outlet,
    Scripts,
    MetaFunction,
    isRouteErrorResponse,
    useRouteError, ErrorResponse
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }) {
    return (
        <html>
           <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Meta/>
                <Links/>
            </head>
            <body>
                <h1>Welcome to UMAXICA Homepage!</h1>
                <hr/>
                <Scripts/>
            </body>
        </html>
    );
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
