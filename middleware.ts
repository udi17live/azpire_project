import { NextResponse, NextRequest } from "next/server";
import {getSessionCookie} from "better-auth/cookies";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    if (pathname.startsWith("/admin/auth/")) {
        return NextResponse.next()
    }

    if (pathname.startsWith("/admin")) {
        const sessionCookie = getSessionCookie(req)

        if (!sessionCookie) {
            return NextResponse.redirect(new URL("/admin/auth/login", req.url))
        }

    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/admin/:path*"]
}