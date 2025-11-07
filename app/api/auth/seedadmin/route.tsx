import {NextRequest, NextResponse} from "next/server";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";

export async function GET(req: NextRequest) {
    const authHeader = req.headers.get("x-seed-secret")
    if (!authHeader || authHeader !== process.env.SEED_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, {status: 401})
    }

    try{
        const data = await auth.api.signUpEmail({
            body: {
                name: process.env.ADMIN_NAME!,
                email: process.env.ADMIN_EMAIL!,
                password: process.env.ADMIN_PASSWORD!,
            },
            headers: await headers()
        });

        return NextResponse.json({ message: "success" }, {status: 201})
    }catch(e: any){
        const message = e?.error || e?.message || "Something went wrong"
        return NextResponse.json({ error: e }, {status: 500})
    }
}