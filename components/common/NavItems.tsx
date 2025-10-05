"use client"
import { NAV_ITEMS } from "@/lib/consts"
import { usePathname } from "next/navigation"
import Link from "next/link"

function NavItems(props: {}) {
    const pathname = usePathname()
    const isActive = (path: string)=>{
        if(path === '/') return pathname === '/'
        return pathname.startsWith(path)
    }

    return (
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map( ({label, href}) =>(<li key={label}>
                <Link href={href} className={`hover:text-yellow-400 transition-colors  ${isActive(href)? 'text-gray-500': ''}`} >{label}</Link>    
            </li>)
        )}
        </ul>
    )
}

export default NavItems
