import React, { useState } from 'react'
import { images, sideBar, sideBar2, sideBar3 } from "../assets/index";
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div
            className={`relative h-screen transition-all dark:bg-gray-900 text-gray-900 dark:text-white duration-300 ${isOpen ? "w-64" : "w-16"} bg-white shadow-lg overflow-hidden`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
              {/* Sidebar Logo */}
              <div className="flex items-center justify-center py-4 mt-4"> {/* Adjust margin-top */}
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
  )
}

export default SideBar
