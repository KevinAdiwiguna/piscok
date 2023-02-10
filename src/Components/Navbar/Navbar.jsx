import React from "react";
import logo from "../../Assets/Images/logo.png";

export const Navbar = () => {
        return (
                <div className="bg-[#FFE868] w-full p-3 hidden md:flex fixed top-0 z-50">
                        <div className="container mx-auto flex justify-between items-center">
                                <div className="flex justify-center items-center gap-10">
                                        <div className="max-w-[80px] ">
                                                <img src={logo} alt="" width={100} />
                                        </div>
                                        <p className="font-bold text-lg">PisangCoklat</p>
                                </div>

                                <div className="font-semibold text-lg">
                                        <a href="#home" className="p-3">
                                                Home
                                        </a>
                                        <a href="#products" className="p-3">
                                                Product
                                        </a>
                                        <a href="#team" className="p-3">
                                                Team
                                        </a>
                                </div>
                        </div>
                </div>
        );
};
