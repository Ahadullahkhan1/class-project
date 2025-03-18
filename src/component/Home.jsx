import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Contact, Contact2, images } from "../assets";
import ContactList from "./ContactList";

const Home = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="flex flex-col md:flex-row h-full">
                <SideBar />
                <div className="w-full flex flex-col p-4 shadow-md">
                    <Navbar />
                    <div className="w-full mt-4 flex flex-col gap-5 justify-center items-center">
                        <div className="w-[90%] overflow-hidden h-32 rounded-lg bg-[#EBF3FE] dark:bg-[#223662] p-4 justify-between flex flex-col md:flex-row items-center">
                            <div className="flex h-full flex-col justify-center text-center md:text-left">
                                <h1 className="font-bold text-xl">Contact Application</h1>
                                <p className="text-sm">Home <span className="font-bold text-2xl">.</span> Contact Application</p>
                            </div>
                            <div className="mt-4 md:mt-0 md:mr-7">
                                <img className="w-[100px] md:w-[150px]" src={images.ChatBc} alt="loading..." />
                            </div>
                        </div>
                        <div className="w-[90%] flex flex-col md:flex-row shadow-2xl rounded-lg">
                            <div className="w-full md:w-[20%] items-center py-4 flex flex-col border-b-2 md:border-b-0 md:border-r-2">
                                <button className="w-[80%] py-3 text-sm rounded-lg bg-[#5D87FF] font-bold text-white">Add New Contact</button>
                                <div className="w-[80%] mt-4 flex flex-col gap-2">
                                    {Contact.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                                            <item.icon className="h-4 w-4" />
                                            <span className="text-gray-700 dark:text-white text-sm font-medium">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-[80%] mt-4">
                                    <h1 className="font-bold text-xs">CATEGORIES</h1>
                                </div>
                                <div className="w-[80%] mt-4 flex flex-col gap-2">
                                    {Contact2.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                                            <item.icon className="h-4 w-4" />
                                            <span className="text-gray-700 dark:text-white text-sm font-medium">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-[80%]">
                                <ContactList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
