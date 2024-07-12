import { singlePageLinks } from "../lib/navbar-single-page-data"


const Navbar = () => {
    return (
        <nav className="bg-cyan-900 flex fixed w-full h-[60px] items-center justify-between px-4 py-2">
            <div className="flex gap-4">
                {singlePageLinks.map((link, index) => {
                    return (
                        <a key={`single-page-navbar-${index}`} href={link.hash} className="text-white text-xl">
                            {link.name}
                        </a>
                    )
                })}
            </div>
            <div className="flex gap-4 mx-5">
                <a href="/login" className="text-white text-xl">Login</a>
                <a href="/register" className="text-white text-xl">Register</a>
            </div>
        </nav>
    )
}

export default Navbar