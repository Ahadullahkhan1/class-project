import { useState } from "react";
import { Search } from "lucide-react";
import { contacts } from "../assets";

const ContactList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedContact, setSelectedContact] = useState(contacts[0]);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Sidebar */}
            <div className="w-full md:w-1/3 border-r p-4 bg-white dark:bg-gray-800">
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none"
                    />
                </div>

                <ul className="space-y-2 overflow-y-auto max-h-[70vh]">
                    {filteredContacts.map((contact) => (
                        <li
                            key={contact.id}
                            onClick={() => setSelectedContact(contact)}
                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${selectedContact.id === contact.id ? "bg-blue-100" : "hover:bg-gray-100"
                                }`}
                        >
                            <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold">{contact.name}</p>
                                <p className="text-xs text-gray-500">alexandra@modernize.com</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact Details */}
            <div className="w-full md:w-2/3 p-6 bg-white dark:bg-gray-900">
                {selectedContact && (
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <img src={selectedContact.avatar} alt={selectedContact.name} className="w-16 h-16 rounded-full" />
                            <div className="text-center sm:text-left ">
                                <h2 className="text-xl font-semibold">{selectedContact.name}</h2>
                                <p className="text-sm text-gray-500">Sales Manager</p>
                                <p className="text-sm text-gray-500">Digital Arc Pvt. Ltd.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="mt-2">
                                <p className="">Phone number</p>
                                <p className="font-semibold">+1 (203) 3458</p>
                            </div>
                            <div className="mt-2">
                                <p className="">Email address</p>
                                <p className="font-semibold">alexandra@modernize.com</p>
                            </div>

                            <div className="col-span-2 mt-2">
                                <p className="">Address</p>
                                <p className="font-semibold">312, Imperical Arc, New western corner</p>
                            </div>

                            <div className="flex justify-between mt-2">
                                <div>
                                    <p className="">City</p>
                                    <p className="font-semibold">New York</p>
                                </div>
                                <div>
                                    <p className="">Country</p>
                                    <p className="font-semibold">United Stats</p>
                                </div>
                            </div>

                            <div className="col-span-2 mt-2">
                                <p className="">Notes</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum hendrerit lobortis. Nullam ut lacus eros. Sed at luctus urna, eu fermentum diam. In et tristique mauris.

                                    Ut id ornare metus, sed auctor enim. Pellentesque nisi magna, laoreet a augue eget, tempor volutpat diam.</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Edit</button>
                            <button className="mt-4 px-4 py-2 bg-[#FBF2EF] text-red-500 rounded-lg">Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactList;
