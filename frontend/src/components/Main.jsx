import React, { useEffect } from 'react';
import { useSectionInView } from "../lib/hooks/useSectionInView"

const Main = () => {
    const { ref } = useSectionInView("Home", 0.5);
    useEffect(() => {
        const handleHashChange = () => {
            const { hash } = window.location;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        handleHashChange(); 

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div ref={ref} className='flex flex-col items-center justify-center min-h-screen text-center w-full' id="home">
            <p className="text-7xl my-5 dark:text-white">OmniFinance Solutions</p>
            <a 
                key="see-models-link" 
                href="#models" 
                className="text-4xl dark:text-white transition-colors duration-500 hover:text-cyan-700 dark:hover:text-purple"
            >
                See Models
            </a>        
        </div>
    );
}

export default Main;
