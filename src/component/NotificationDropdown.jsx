import { useState, useRef } from "react";
import { Bell } from "lucide-react";
import { notifications } from "../assets";
// import { useClickAway } from "react-use";


const NotificationDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    //   useClickAway(dropdownRef, () => setIsOpen(false));

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Notification Icon with Badge */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative"
            >
                <Bell className="stroke-2 h-5 w-5 mt-1" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
                    {notifications.length}
                </span>
            </button>

            {/* Dropdown Menu */}
            <div
                ref={dropdownRef}
                className={`absolute right-0 mt-3 w-80 bg-white border rounded-md shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                    }`}
            >
                <div className="p-4 text-gray-700 font-semibold border-b flex justify-between">
                    <h5 className="mb-0 text-lg">Notifications</h5>
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">{notifications.length} new</span>
                </div>

                <div className="max-h-72 overflow-y-auto">
                    {notifications.map((notification) => (
                        <a
                            key={notification.id}
                            href="#"
                            className="flex items-center gap-3 p-4 hover:bg-gray-100 transition"
                        >
                            <img src={notification.image} alt="user" className="w-10 h-10 rounded-full" />
                            <div>
                                <h6 className="text-sm font-semibold">{notification.name}</h6>
                                <span className="text-xs text-gray-500">{notification.message}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="p-3 bg-gray-100 text-center cursor-pointer hover:bg-gray-200">
                    See All Notifications
                </div>
            </div>
        </div>
    );
};

export default NotificationDropdown;
