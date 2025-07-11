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
            <nav onClick={() => setMenuOpen(prev => !prev)} className="transition-all duration-300 ease-in-out w-15 xl:w-0 flex items-center justify-center">
                <img className="w-6 h-6" src="/Components/NavBar/menu.png" />
            </nav>
            <div
                className={`
                    absolute     top-12 left-0 z-50 bg-white shadow-lg h-screen 
                    transition-all duration-150 ease-in-out xl:hidden w-64
                    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Menu content */}
                <a href="#" className="block px-4 py-3 bg-white text-black transition-colors duration-300 active:bg-gray-200 rounded">Profile</a>
                <a href="#" className="block px-4 py-3 bg-white text-black transition-colors duration-300 active:bg-gray-200 rounded">Settings</a>
            </div>
            <nav className="rounded-r-xl flex items-center ">
                <img src="/Components/NavBar/Logo_Brno_BLACK_RGB.png"/>
            </nav>
            <nav className="flex flex-row border-r transition-all duration-300 ease-in-out w-0 xl:w-full overflow-y-hidden">
                <a href="#" className="flex whitespace-nowrap px-4 w-1/3 justify-center items-center hover:bg-indigo-400">Home</a>
                <a href="#" className="flex whitespace-nowrap px-4 w-1/3 justify-center items-center hover:bg-indigo-400">Create About me</a>
                <a href="#" className="flex whitespace-nowrap px-4 w-1/3 justify-center items-center hover:bg-indigo-400">Creator</a>
            </nav>

        </div>
    )
}