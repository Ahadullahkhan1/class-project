import { Bars2Icon } from '@heroicons/react/16/solid'
import { Moon, Search, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { languages, topnav } from '../assets'
import Cart from './Cart'
import NotificationDropdown from './NotificationDropdown'

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(languages[0]);
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <div className='h-[80px] flex items-center w-full justify-between px-6 pr-8'>
            <div className='flex items-center gap-4'>
                <Bars2Icon className='h-5 w-5    stroke-2' />
                <Search className='h-5 w-5 stroke-2' />
                {
                    topnav.map((item, index) => (
                        <div key={index}>
                            <p className='text-sm'>{item.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center gap-7'>
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className=""
                >
                    {theme === "dark" ? <Sun className="text-yellow-500 h-5 w-5" /> : <Moon className="h-5 w-5 text-gray-700" />}
                </button>
                <div
                    className="relative inline-block"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {/* Selected Flag */}
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                        <img src={selected.flag} alt="Selected Language" className="w-5  h-5 rounded-full object-cover" />
                    </button>

                    {/* Dropdown */}
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
        </div>
    )
}

export default Navbar
