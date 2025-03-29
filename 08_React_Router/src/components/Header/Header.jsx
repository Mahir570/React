import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky  z-50 top-0">
            <nav className=" flex bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap  justify-center items-center mx-auto max-w-screen-xl ">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex  items-center order-2 ml-6">
                        <Link
                            to="#"
                            className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1 focus:outline-none "
                        >
                            Log in
                        </Link>
                        <Link
                            to="/"
                            className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1 focus:outline-none  "
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex items-center  space-x-1 font-medium lg:space-x-8 lg:mx-6 ">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block shadow py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 `
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/About"
                                    className={({isActive}) =>
                                        `shadow block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 `
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}