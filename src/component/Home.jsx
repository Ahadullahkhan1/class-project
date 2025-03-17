import { useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { images } from "../assets";

const Home = () => {


    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="flex h-full">
                <SideBar />
                <div className="w-full flex-col flex p-4 shadow-md">
                    <Navbar />
                    <div className="w-full mt-4 flex flex-col gap-5 justify-center items-center">
                        <div className="w-[90%] overflow-hidden h-32 rounded-lg bg-[#EBF3FE] p-4 justify-between flex">
                            <div className="flex h-full flex-col justify-center">
                                <h1 className="font-bold text-xl">Contact Application</h1>
                                <p className="text-sm">Home <span className="font-bold text-2xl">.</span> Contact Application</p>
                            </div>
                            <div className="mt-4 mr-7">
                                <img className="w-[150px]" src={images.ChatBc} alt="loading..." />
                            </div>
                        </div>
                        <div className="w-[90%] shadow-lg rounded-lg h-[90vh]">
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;
