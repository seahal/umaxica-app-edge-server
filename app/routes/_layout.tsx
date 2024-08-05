import type {MetaFunction} from '@remix-run/node';
import {type ErrorResponse, isRouteErrorResponse, Outlet, useRouteError} from '@remix-run/react';


export const meta: MetaFunction = ({error}) => {
    if (error) {
        return [
            ...((error as ErrorResponse).status === 404 ? [{title: 'Page Not Found'}] : []),
            {name: 'robots', content: 'noindex, nofollow'},
        ];
    }
};


export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <p>404</p>;
        }

        throw new Error(`${error.status} ${error.statusText}`);
    }

    throw new Error(error instanceof Error ? error.message : 'Unknown Error');
}

export default function layout() {
    return <Outlet />;
}