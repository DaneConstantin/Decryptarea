import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { ThemeChanger } from './DarkSwitch';
import { RxCaretDown } from "react-icons/rx";

export default function HamburgerMenu() {
    const [showMenu, setShowMenu] = useState(false);

    const [submenuOpen, setSubmenuOpen] = useState({ news: false, services: false });

    const toggleSubmenu = (key) => setSubmenuOpen(prev => ({ ...prev, [key]: !prev[key] }));

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showMenu && !event.target.closest('#menu-container') && !event.target.closest('#hamburger-button')) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showMenu]);


    return (
        <>


            <button
                type="button"
                onClick={toggleMenu}
                id="hamburger-button"
                className="focus:outline-none flex justify-end flex-grow sm:hidden"
                aria-label="Hamburger Menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                >
                    {showMenu ? (
                        <FiX className="text-3xl" />
                    ) : (
                        <FiMenu className="text-3xl" />
                    )}
                </svg>
            </button>

            {showMenu ? (
                <div id="menu-container"
                    className="font-general-medium flex flex-col top-16 left-0 justify-evenly bg-[#fbfbfb] dark:bg-primary-dark absolute h-auto w-full overflow-y-auto px-4 py-2 space-y-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                >
                    <div className="flex sm:hidden justify-center py-2">
                        <ThemeChanger />
                    </div>
                    <ul
                        className={`md:hidden dark:bg-primary-dark !mt-0 p-4 rounded-lg space-y-4 ${showMenu ? 'block' : 'hidden'}`}
                    >
                        <li>
                            <a href="/templates" className="text-primary-dark dark:text-white hover:underline">
                                Templates
                            </a>
                        </li>

                        {/* News Submenu for Mobile */}
                        <li>
                            <button
                                className="w-full text-left text-primary-dark dark:text-white flex justify-between items-center"
                                onClick={() => toggleSubmenu('news')}
                            >
                                News <RxCaretDown className={`${submenuOpen.news ? 'rotate-180' : ''} transition-transform`} />
                            </button>
                            <ul className={`${submenuOpen.news ? 'block' : 'hidden'} space-y-2 p-4`}>
                                <li><a href="https://stitches.dev/" className="hover:underline">Tech News</a></li>
                                <li><a href="/colors" className="hover:underline">Crypto</a></li>
                                <li><a href="https://icons.radix-ui.com/" className="hover:underline">Business & Political</a></li>
                            </ul>
                        </li>

                        {/* Services Submenu for Mobile */}
                        <li>
                            <button
                                className="w-full text-left text-primary-dark dark:text-white flex justify-between items-center"
                                onClick={() => toggleSubmenu('services')}
                            >
                                Services <RxCaretDown className={`${submenuOpen.services ? 'rotate-180' : ''} transition-transform`} />
                            </button>
                            <ul className={`${submenuOpen.services ? 'block' : 'hidden'} space-y-2 p-4`}>
                                <li><a href="/" className="hover:underline">Audit</a></li>
                                <li><a href="/" className="hover:underline">Development</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="https://blog.decrypteria.com" className="text-primary-dark dark:text-white hover:underline">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-primary-dark dark:text-white hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>

                </div>
            ) : null
            }


        </>
    )
}