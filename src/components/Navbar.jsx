import React from "react";
import { useState } from "react";
import ThemeToggleButton from './ThemeToggleButton'

const Navbar = ({ theme, toggleTheme}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        setIsMenuOpen(false);
    }

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
        setIsMenuOpen(false);
    }

    const linkClassesDesktop = "text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 px-4";
    const linkClassesMobile = "text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 block py-2 px-4";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full py-3">
            <div className="bg-white dark:bg-black max-w-4xl mx-auto shadow-lg shadow-indigo-700/50 rounded-full ">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                    <div className="shrink-0">
                        <a href="/" onClick={scrollToTop}>
                            <img src="./src/assets/logo.png" alt="Página Inicial" className="w-12 md:w-16" />
                        </a>
                    </div>
                        <nav className="hidden md:flex md:items-center md:space-x-4 font-bold">
                            <a href="#" onClick={scrollToTop} className={linkClassesDesktop}>Home</a>
                            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={linkClassesDesktop}>About</a>
                            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className={linkClassesDesktop}>Projects</a>
                            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={linkClassesDesktop}>Contact</a>
                            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
                        </nav>
                        <div className="md:hidden flex items-center">
                            <div className="mr-4">
                                <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <svg className="h-6 w-6" xmlns="www.w3.org" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" xmlns="www.w3.org" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>  
                    </div>          
                </div>
            </div>
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black shadow-lg mx-4 rounded-b-lg">
                    <a href="#" onClick={scrollToTop} className={linkClassesMobile}>Home</a>
                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={linkClassesMobile}>About</a>
                    <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className={linkClassesMobile}>Projects</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={linkClassesMobile}>Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar;