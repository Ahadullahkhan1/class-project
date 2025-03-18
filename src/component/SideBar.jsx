import React, { useState } from 'react';
import { images, sideBar, sideBar2, sideBar3 } from "../assets/index";
import { Menu } from 'lucide-react';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button 
                className="sm:hidden p-3 fixed top-4 bg-gray-50 left-4 dark:bg-gray-800 rounded-md z-50"
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
            </button>

            {/* Sidebar */}
            <div 
                className={`fixed top-0 left-0 h-full transition-all dark:bg-gray-900 text-gray-900 dark:text-white duration-300 
                ${isOpen ? "w-64" : "w-16"} bg-white shadow-lg overflow-hidden hidden sm:block`}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                {/* Sidebar Logo */}
                <div className="flex items-center justify-center py-4 mt-4">
                    <div className={`transition-all duration-300 ${isOpen ? "w-32 h-10" : "w-10 h-10"}`}>
                        <img src={isOpen ? images.logo : images.logo2} alt="Logo" className="object-contain w-full h-full" />
                    </div>
                </div>

                {/* Sidebar Content (Scrollable) */}
                <nav className="flex flex-col space-y-4 px-2 overflow-y-auto h-[calc(100vh-80px)] mt-4">
                    <h2 className="text-gray-700 dark:text-white font-medium text-sm">{isOpen ? "Home" : "..."}</h2>
                    {sideBar.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                            {<item.icon className="h-5 w-5" />}
                            {isOpen && <span className="text-gray-700 dark:text-white text-sm font-medium">{item.label}</span>}
                        </div>
                    ))}

                    <h2 className="text-gray-700 dark:text-white font-medium text-sm">{isOpen ? "App" : "..."}</h2>
                    {sideBar2.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                            {<item.icon className="h-5 w-5" />}
                            {isOpen && <span className="text-gray-700 dark:text-white text-sm font-medium">{item.label}</span>}
                        </div>
                    ))}

                    <h2 className="text-gray-700 font-medium dark:text-white text-sm">{isOpen ? "Pages" : "..."}</h2>
                    {sideBar3.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                            {<item.icon className="h-5 w-5" />}
                            {isOpen && <span className="text-gray-700 dark:text-white text-sm font-medium">{item.label}</span>}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Mobile Sidebar (Full Screen Overlay) */}
            {mobileOpen && (
                <div className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 p-5 sm:hidden">
                    <button 
                        className="absolute top-4 right-4 text-gray-900 dark:text-white"
                        onClick={() => setMobileOpen(false)}
                    >
                        ✕
                    </button>

                    {/* Sidebar Content */}
                    <nav className="mt-10 space-y-4">
                        {sideBar.concat(sideBar2, sideBar3).map((item, index) => (
                            <div key={index} className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                                {<item.icon className="h-5 w-5" />}
                                <span className="text-gray-700 dark:text-white text-sm font-medium">{item.label}</span>
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default SideBar;
