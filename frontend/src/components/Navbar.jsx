import { singlePageLinks } from "../lib/navbar-single-page-data"


const Navbar = () => {
    return (
        <nav className="bg-slate-900 flex fixed w-full items-center justify-between px-4 py-2">
            <div className="flex gap-4">
                {singlePageLinks.map((link, index) => {
                    return (
                        <a key={`single-page-navbar-${index}`} href={link.hash} className="text-white text-lg">
                            {link.name}
                        </a>
                    )
                })}
            </div>
            <div className="flex gap-4 mx-5">
                <a href="/" className="text-white text-lg">Login</a>
                <a href="/" className="text-white text-lg">Register</a>
            </div>
        </nav>
    )
}

export default Navbar