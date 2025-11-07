import { NextResponse, NextRequest } from "next/server";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    const session = await auth.api.getSession({
        headers: Object.fromEntries(req.headers)
    })

    const isAuthRoute = pathname.startsWith("/auth")
    const isAdminRoute = pathname.startsWith("/admin/");

    if (isAuthRoute && session) {
        return NextResponse.redirect(new URL("/admin", req.url));
    }

    if (isAdminRoute && !isAuthRoute && !session) {
        return NextResponse.redirect(new URL("/admin/auth/login", req.url));
    }
    return NextResponse.next()
}

export const config = {
    runtime: "nodejs",
    matcher: ["/admin/:path*", "/auth/:path*"],
}