
import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
    // Store current request url in a custom header, which we can read later
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-url', request.url);
    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: [
        // Skip all internal paths (api,_next)
        '/((?!api|_next|favicon.ico).*)',
    ],
};