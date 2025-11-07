"use client"
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import AZButton from "@/components/buttons/AZButton";
import {ArrowRight, Eye, EyeClosed} from "lucide-react";
import {useState, useActionState} from "react";
import {loginAction} from "@/actions/authActions";
import FormInputError from "@/components/forms/FormInputError";
import FormError from "@/components/forms/FormError";

const initialFormState = {
    success: false,
    errors: {},
}

export default function LoginForm() {
    const [isPassword, setIsPassword] = useState<boolean>(true)
    const [state, formAction] = useActionState(loginAction, initialFormState)

    return (
        <form action={formAction} className="flex w-full flex-col space-y-4">
            <Label htmlFor="email text-2xl">Email:</Label>
            <Input
                className="p-6 rounded"
                type="email"
                name="email"
                placeholder="Email"
            />
            {state?.errors?.email && (
                <FormInputError error={state.errors.email[0]} />
            )}

            <Label htmlFor="email text-2xl">Password:</Label>
            <InputGroup className="p-6 pl-3 rounded">
                <InputGroupInput
                    placeholder="Password"
                    name="password"
                    type={isPassword ? "password" : "text"}
                />
                <InputGroupAddon align="inline-end" onClick={() => setIsPassword(!isPassword)}>
                    {isPassword ? <EyeClosed /> : <Eye />}
                </InputGroupAddon>
            </InputGroup>
            {state?.errors?.password && (
                <FormInputError error={state.errors.password[0]} />
            )}


            {state.errors?._form?.[0] && (
                <FormError error={state.errors._form[0]} />
            )}
            <AZButton label="Login" type="submit" trailingIcon={ArrowRight} />
        </form>
    )
}