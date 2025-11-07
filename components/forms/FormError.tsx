import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {AlertCircleIcon} from "lucide-react";

interface FormErrorProps {
    error: string
}

export default function FormError({ error }: FormErrorProps) {
    return (
        <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>{error}</AlertTitle>
        </Alert>
    )
}