import Image from "next/image";
import {JSX} from "react";

interface LogoExtendedProps {
    height?: number;
    width?: number;
    className?: string;
}

export default function LogoExtended({height=300, width=200, className=""}: LogoExtendedProps): JSX.Element {
    return (
        <Image  width={width} height={height} src="/logo_extended.webp" alt="Azpire Designs" className={className} />
    )
}