import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css'

export function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const iconStyle = {
        height: '2.5em',
        width: '2.5em',
    };

    return (
        <nav className="border-gray-200 bg-gray-50 dark:border-gray-700 relative z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto pt-4 px-4">
                <button
                    data-collapse-toggle="navigable-hamburger"
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-sm rounded-lg head:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navigable-hamburger"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open the main menu</span>
                    <svg style={iconStyle} aria-hidden="true" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 18h18M3 12h18M3 6h18" />
                    </svg>
                </button>
                <div className={`${isOpen ? 'dropdown-menu show' : 'dropdown-menu'} absolute top-full right-0 mt-2 py-2 shadow-lg rounded-lg bg-gray-100`} id="navigable-hamburger">
                    <ul className="flex flex-col rounded-lg  bg-gray-100">
                        <li>
                            <Link
                                to="/"
                                className="block font-bold rounded-lg py-2 px-3 text-black  hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white"
                            >메인화면으로</Link>
                        </li>
                        <li>
                            <Link
                                to="/introduction"
                                className="block font-bold rounded-lg py-2 px-3 text-black  hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white"
                            >로드스코어소개</Link>
                        </li>
                        <li>
                            <Link
                                to="/social-mapping"
                                className="block font-bold rounded-lg py-2 px-3 text-black  hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white"
                            >소셜맵핑소개</Link>
                        </li>
                        <li>
                            <Link
                                to="/data-management"
                                className="block font-bold rounded-lg py-2 px-3 text-black  hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white"
                            >데이터관리</Link>
                        </li>
                        <li>
                            <Link
                                to="/citizen-perception"
                                className="block font-bold rounded-lg py-2 px-3 text-black  hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white"
                            >시민체감지수</Link>
                        </li>
                        <li>
                            <Link
                                to="/trends"
                                className="block font-bold rounded-lg py-2 px-3 text-black  hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white"
                            >국내외동향</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
