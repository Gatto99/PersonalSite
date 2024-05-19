'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Tab({children, link} : {children: React.ReactNode, link: string}) {
    const pathname = usePathname();

    return(
        <Link href={link}
            className={clsx(
                {
                    'text-blue': pathname === link
                }
            )}>
            <div className={"hover:scale-110 transition-all h-full place-content-center hover:cursor-pointer"}>
                {children}
            </div>
        </Link>
    )
}