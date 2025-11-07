"use server"

import {loginSchema} from "@/lib/zod/loginSchema";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

export async function loginAction(prevState:any , formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const parsed = loginSchema.safeParse({email, password});

    if (!parsed.success) {
        const errors = parsed.error.flatten().fieldErrors;
        return { success: false, errors };
    }

    try{
        const data = await auth.api.signInEmail({
            body: {
                email,
                password,
                rememberMe: false,
                callbackURL: `${process.env.BETTER_AUTH_URL}/admin`,
            },
            headers: await headers()
        })
    }catch(err:any){
        const message = err.message || err.error || "Invalid credentials";
        return { success: false, errors: {_form: [message] } };
    }

    redirect("/admin");
}