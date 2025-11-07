import LoginForm from "@/components/forms/auth/LoginForm";

export default function LoginPage(){
    return (
        <div className="flex flex-col items-start justify-center w-full max-w-xl mx-auto space-y-5">
            <h3 className="text-xl">Welcome Back, Please Login</h3>

            <LoginForm />
        </div>
    )
}