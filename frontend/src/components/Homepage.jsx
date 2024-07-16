import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Main from './Main.jsx';
import Models from './Models.jsx';
import About from './About.jsx';

const Homepage = () => {
    const location = useLocation();

    useEffect(() => {
        const scrollToSection = () => {
            const { hash } = location;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        scrollToSection();
    }, [location]);

    return (
        <>
            <Main />
            <About />
            <Models />
        </>
    );
};

export default Homepage;