'use client'

import {useState, useEffect} from "react";
import Image from "next/image";

export default function NavbarMiddle() {

    const [menuOpen, setMenuOpen] = useState(false);

    // Auto-close the menu when screen width is >= 1280px (xl)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setMenuOpen(false);
            }
        };

        // Listen on mount
        window.addEventListener('resize', handleResize);

        // Check immediately in case user loaded on large screen
        handleResize();

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex basis-3/4">
            <nav onClick={() => setMenuOpen(prev => !prev)} className="transition-all duration-300 ease-in-out w-1/3 lg:w-0 flex items-center justify-center touch-manipulation">
                <img className="w-6 h-6" src="/Components/NavBar/menu.png" />
            </nav>
            <div
                className={`
                    absolute     top-12 left-0 z-50 bg-white shadow-lg h-screen 
                    transition-all duration-50 ease-in-out lg:hidden w-64
                    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Menu content */}
                <a href="#" className="block px-4 py-3 bg-white text-black transition-colors duration-300 active:bg-gray-200 rounded">Home</a>
                <a href="#" className="block px-4 py-3 bg-white text-black transition-colors duration-300 active:bg-gray-200 rounded">Create About me</a>
                <a href="#" className="block px-4 py-3 bg-white text-black transition-colors duration-300 active:bg-gray-200 rounded">Creator</a>
            </div>
            <nav className="w-2/3 rounded-r-xl flex items-center justify-center overflow-hidden">
                <img src="/Components/NavBar/Logo_Brno_BLACK_RGB.png"/>
            </nav>
            <nav className="flex flex-row transition-all duration-2000 ease-in-in w-0 lg:w-full overflow-y-hidden">
                <div className="flex whitespace-nowrap px-4 w-1/3 justify-center items-center hover:bg-gray-100 z-3 overflow-hidden"><a href="#" >Home</a></div>
                <div className="flex whitespace-nowrap px-4 w-1/3 justify-center items-center hover:bg-gray-100 z-2 overflow-hidden"><a href="#" >Create About me</a></div>
                <div className="flex whitespace-nowrap px-4 w-1/3 justify-center items-center hover:bg-gray-100 z-1 overflow-hidden"><a href="#" >Creator</a></div>
            </nav>

        </div>
    )
}