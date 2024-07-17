import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import { singlePageLinks } from "../lib/data/navbar-single-page-data";
import { useTheme } from "../context/ThemeContext";
import { useActiveSection } from '../context/ActiveSectionContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { activeSection, setActiveSection, setTimeOfLastClick} = useActiveSection();
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0 bg-cyan-900 dark:bg-gray-800">
            <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
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
            </ul>
        </nav>
    );
}

export default Navbar;