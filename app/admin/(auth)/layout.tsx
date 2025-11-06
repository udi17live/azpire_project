import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoExtended from "@/components/logos/LogoExtended";

export default function AuthLayout({children}:{children: React.ReactNode}) {
    return (
        <>
            <div className="flex flex-col w-full md:w-1/2 items-start justify-center px-15">
                <LogoExtended className="mb-6 -ml-2.5" />
                {children}
            </div>
            <div className="hidden md:block md:w-1/2 bg-secondary relative">
                <Link
                    href="https://www.pexels.com/photo/woman-in-blue-suit-jacket-2422293/"
                    className="absolute z-10 bottom-5 right-5 rounded p-2 text-white bg-black/40"
                >
                    Photo by Jopwell
                </Link>
                <Image fill src="/auth_bg.webp" alt="Auth Background" className="absolute object-cover" />
            </div>
        </>
    )
}