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


