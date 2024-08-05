import {json, Response} from "@remix-run/node";

export default () => null;

export const ErrorBoundary = () => <div>error</div>;

export const loader = () => {
    return json(null, { status: 404 });
};

export function CatchBoundary() {
    const caught = useCatch();

    return (
        <html>
        <head>
            <title>Oops!</title>
            <Meta />
            <Links />
        </head>
        <body>
        <h1>
            {caught.status} {caught.statusText}
        </h1>
        <Scripts />
        </body>
        </html>
    );
}
