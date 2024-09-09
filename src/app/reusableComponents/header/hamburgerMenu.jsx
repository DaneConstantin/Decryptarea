import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import { ThemeChanger } from './DarkSwitch';


export default function HamburgerMenu() {
    const [showMenu, setShowMenu] = useState(false);


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
                    className="font-general-medium flex flex-col top-14 left-0 justify-evenly bg-[#f0f0f0] dark:bg-primary-dark absolute h-auto w-full overflow-y-auto px-4 py-2 space-y-4"
                >
                    <NavLinks closeMenu={() => setShowMenu(false)} />
                    <div className="flex sm:hidden justify-center py-2">
                        <ThemeChanger />
                    </div>
                </div>
            ) : null
            }


        </>
    )
}