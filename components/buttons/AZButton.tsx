import {LucideIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

interface AZButtonProps {
    label: string;
    leadingIcon?: LucideIcon;
    trailingIcon?: LucideIcon;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function AZButton({label, leadingIcon:LeadingIcon,trailingIcon:TrailingIcon,onClick,className,disabled=false,type="button"}: AZButtonProps) {
    return <Button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`flex gap-5 items-center justify-between py-6 px-8 rounded uppercase font-bold disabled:pointer-events-auto disabled:cursor-not-allowed cursor-pointer tracking-widest ${className}`}
    >
        {LeadingIcon && <LeadingIcon className=" h-5 w-5" aria-hidden />}
        {label}
        {TrailingIcon && <TrailingIcon className=" h-5 w-5" aria-hidden />}
    </Button>
}