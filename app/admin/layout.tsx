import React from "react";
import {Inter} from "next/font/google";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

const inter = Inter({
    subsets: ["latin"]
})

export default async function BaseAdminLayout({children}:{children: React.ReactNode}) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        redirect("/auth/login");
    }

    return (
        <div className={`${inter.className} flex w-full h-screen`}>
            {children}
        </div>
    )
}