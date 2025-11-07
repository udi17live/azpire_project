
interface FormInputErrorProps {
    error: string,
    className?: string
}

export default function FormInputError({ error, className }: FormInputErrorProps) {
    return (
        <p className={`text-sm text-red-500 -mt-2 ${className}`}>{error}</p>
    )
}