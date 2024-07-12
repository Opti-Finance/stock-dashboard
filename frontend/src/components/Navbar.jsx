import { singlePageLinks } from "../lib/navbar-single-page-data"
import { useTheme } from "../context/ThemeContext"

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <nav className="bg-cyan-900 dark:bg-gray-800 flex fixed w-full h-[60px] items-center justify-between px-4 py-2">
            <div className="flex gap-4">
                {singlePageLinks.map((link, index) => {
                    return (
                        <a key={`single-page-navbar-${index}`} href={link.hash} className="text-white dark:text-gray-300 text-xl">
                            {link.name}
                        </a>
                    )
                })}
            </div>
            <div className="flex gap-4 mx-5">
                <button onClick={toggleTheme} className="text-white dark:text-gray-300 text-xl">{theme === "light" ? "Turn Dark" : "Turn Light"}</button>                
                <a href="/login" className="text-white dark:text-gray-300 text-xl">Login</a>
                <a href="/register" className="text-white dark:text-gray-300 text-xl">Register</a>
            </div>
        </nav>
    )
}

export default Navbar