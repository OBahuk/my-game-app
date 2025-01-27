import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    if (path === '/') {
        return NextResponse.next();
    }

    const session = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });

    const isAuthenticated = !!session;

    if (isAuthenticated) {
        return NextResponse.next();
    }

    // Redirect unauthenticated users to login page
    return NextResponse.redirect(new URL('/login', request.nextUrl.href));
}

export const config = {
    matcher: ['/games', '/leaderboard', '/purchase']
};
