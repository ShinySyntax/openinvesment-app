import { ConnectWallet } from "@nfid/identitykit/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";
import logo from "../asset/logo.svg";

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);
    // const [theme, setTheme] = useState(() => {
    //     // Load theme from local storage or use system preference
    //     const storedTheme = localStorage.getItem("theme");
    //     if (storedTheme) return storedTheme;
    //     return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    // });

    // const location = useLocation();

    // useEffect(() => {
    //     // Apply the theme class to the document
    //     if (theme === "dark") {
    //         document.documentElement.classList.add("dark");
    //     } else {
    //         document.documentElement.classList.remove("dark");
    //     }

    //     // Save the theme to local storage
    //     localStorage.setItem("theme", theme);
    // }, [theme]);

    // const toggleTheme = (event) => {
    //     event.preventDefault();
    //     event.stopPropagation(); // Prevent any bubbling issues
    //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    // };

    const links = [
        { path: "/", label: "Buy" },
        { path: "/sell", label: "Sell" },
        { path: "/swap", label: "Swap" },
        { path: "/account", label: "Account" },
        { path: "/guide", label: "Guide" },
    ];

    return (
        <div className="py-4 flex w-full justify-between h-20">
            <div className="flex w-full justify-between">
                {/* Logo */}
                <div className="flex items-center ">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-10 md:w-16 rounded-full mr-10 ml-5 md:ml-0" />
                    </Link>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex w-full justify-between items-center text-[15px] font-bold">
                        {links.map((link) => (
                            <li key={link.path} className={`w-24 h-10 flex justify-center items-center  rounded-[7px] ${
                                location.pathname === link.path
                                    ? "bg-[#146f68] text-white"
                                    : "hover:bg-[#146f68] text-black dark:text-white"
                            }`}>
                                <Link
                                    to={link.path}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger Menu */}
                    <div
                        className="w-[60px] h-[60px] flex flex-col justify-center items-center cursor-pointer md:hidden transition-all duration-300"
                        onClick={() => setHamburger((prev) => !prev)}
                    >
                        <div
                            className={`bg-black dark:bg-gray-500 w-[25px] h-[2px] transition-all duration-500 ${
                                hamburger ? "-rotate-45 translate-y-[8px] delay-200" : "rotate-0 translate-y-0"
                            }`}
                        ></div>
                        <div
                            className={`bg-black dark:bg-gray-500 h-[2px] flex justify-center items-center my-[6px] transition-all duration-300 ${
                                hamburger ? "w-0" : "w-[25px] delay-300"
                            }`}
                        ></div>
                        <div
                            className={`bg-black dark:bg-gray-500 w-[25px] h-[2px] transition-all duration-500 ${
                                hamburger ? "rotate-45 -translate-y-[8px] delay-200" : "rotate-0 translate-y-0"
                            }`}
                        ></div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center">
                    {/* Theme Toggle */}
                    {/* <button
                        id="theme-toggle"
                        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                        className="rounded-full shadow-toggle dark:shadow-none bg-primary-800 dark:bg-transparent dark:text-[#6F767E]"
                        onClick={toggleTheme}
                    >
                        <div className="w-6 h-6 m-1 flex items-center gap-2">
                            {theme === "dark" ? (
                                <ReactSVG src="/icons/moon.svg" />
                            ) : (
                                <ReactSVG src="/icons/sun.svg" />
                            )}
                        </div>
                    </button> */}

                    {/* Modal and Connect Wallet */}
                    <ConnectWallet />
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden fixed z-30 w-full flex justify-center items-center rounded-b-md bg-blue-900 shadow-[0_20px_40px_20px_rgb(0,0,0,.3)] transition-all duration-500 ${
                    hamburger ? "translate-y-[70px]" : "-translate-y-[300px]"
                }`}
            >
                <ul className="w-auto h-auto py-4 px-2 my-auto mx-0 outline-4">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                onClick={() => setHamburger(false)}
                                className="rounded-md py-2 block font-medium text-white border-[1px] border-transparent hover:border-white transition-all duration-200 cursor-pointer"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
