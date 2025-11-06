"use client"
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import AZButton from "@/components/buttons/AZButton";
import {ArrowRight, CheckIcon, CreditCardIcon, Eye, EyeClosed} from "lucide-react";
import {useState} from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPassword, setIsPassword] = useState<boolean>(true)

    return (
        <form method="POST" action="" className="flex w-full flex-col space-y-4">
            <Label htmlFor="email text-2xl">Email:</Label>
            <Input
                className="p-6 rounded"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />

            <Label htmlFor="email text-2xl">Password:</Label>
            <InputGroup className="p-6 pl-3 rounded">
                <InputGroupInput placeholder="Password" type={isPassword ? "password" : "text"} value={password} onChange={(e) => setPassword(e.target.value)} />
                <InputGroupAddon align="inline-end" onClick={() => setIsPassword(!isPassword)}>
                    {isPassword ? <EyeClosed /> : <Eye />}
                </InputGroupAddon>
            </InputGroup>

            <AZButton label="Login" type="submit" trailingIcon={ArrowRight} />
        </form>
    )
}