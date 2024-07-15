import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { singlePageLinks } from "../lib/navbar-single-page-data";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <nav className="bg-cyan-900 dark:bg-gray-800 flex fixed w-full h-[60px] items-center justify-between px-4 py-2">
            <div className="flex gap-4">
                {singlePageLinks.map((link, index) => (
                    <Link 
                        key={`single-page-navbar-${index}`} 
                        to={`/${link.hash}`} 
                        className="text-white dark:text-gray-300 text-xl cursor-pointer"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="flex gap-4 mx-5">
                <button onClick={toggleTheme} className="text-white dark:text-gray-300 text-xl">
                    {theme === "light" ? "Turn Dark" : "Turn Light"}
                </button>
                <a onClick={handleLoginClick} className="text-white dark:text-gray-300 text-xl cursor-pointer">Login</a>
                <a onClick={handleRegisterClick} className="text-white dark:text-gray-300 text-xl cursor-pointer">Register</a>
            </div>
        </nav>
    );
}

export default Navbar;