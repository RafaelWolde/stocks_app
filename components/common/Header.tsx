
import Link from "next/link"
import Image from "next/image"
import NavItems from "./NavItems"
import UserDropdown from "./UserDropdown"
function Header(props: {}) {
    const {} = props

    return (
        <header className="sticy top-0 header">
            <div className="container header-wrapper">
                <Link   href="/">
                    <Image src="/assets/icons/logo.svg" alt="Logo" width={120} height={30} />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
                <UserDropdown/>
            </div>
        </header>
    )
}

export default Header
