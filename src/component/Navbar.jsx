import { Bars2Icon } from '@heroicons/react/16/solid';
import { Moon, Search, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { languages, topnav } from '../assets';
import Cart from './Cart';
import NotificationDropdown from './NotificationDropdown';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(languages[0]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="h-[80px] flex items-center w-full justify-between px-4 md:px-6 lg:px-8">
            {/* Left Side */}
            <div className="flex items-center gap-4">
                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <Bars2Icon className="h-6 w-6" />
                </button>

                {/* Search Icon */}
                <Search className="h-5 w-5 stroke-2 hidden md:block" />

                {/* Navigation Links (Hidden on Mobile) */}
                <div className="hidden md:flex gap-4">
                    {topnav.map((item, index) => (
                        <p key={index} className="text-sm">{item.title}</p>
                    ))}
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5 md:gap-7">
                {/* Theme Toggle */}
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    {theme === "dark" ? <Sun className="text-yellow-500 h-5 w-5" /> : <Moon className="h-5 w-5 text-gray-700" />}
                </button>

                {/* Language Dropdown */}
                <div
                    className="relative inline-block"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                        <img src={selected.flag} alt="Selected Language" className="w-5 h-5 rounded-full object-cover" />
                    </button>

                    {isOpen && (
                        <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-900 shadow-lg rounded-md z-50">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setSelected(lang)}
                                    className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    <img src={lang.flag} alt={lang.name} className="w-5 h-5 rounded-full object-cover" />
                                    <span className="text-sm text-gray-900 dark:text-white">{lang.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <Cart />
                <NotificationDropdown />
            </div>

            {/* Mobile Menu */}
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div>
                    {/* Background Overlay to close menu */}
                    <div
                        className="fixed inset-0 bg-black opacity-30 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>

                    {/* Mobile Menu Content */}
                    <div className="absolute top-[80px] left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden z-50 p-4">
                        {topnav.map((item, index) => (
                            <p
                                key={index}
                                className="text-sm py-2 border-b cursor-pointer"
                                onClick={() => setMobileMenuOpen(false)} // Close menu on click
                            >
                                {item.title}
                            </p>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default Navbar;
