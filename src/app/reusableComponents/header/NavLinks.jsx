import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { RxCaretDown } from "react-icons/rx";
import Image from 'next/image';

const NavLinks = () => {

    return (
        <NavigationMenu.Root>
            {/* Desktop Version */}
            <NavigationMenu.List className=" shadow-blackA4 m-0 flex p-1 ">
                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="block text-left text-sm text-primary-dark leading-8 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 pt-3 sm:pt-0 border-t-2 sm:border-t-0 border-primary-light dark:border-[#ffffff1a]"
                        href="/templates"
                    >
                        Templates
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="block text-left text-sm text-primary-dark leading-8 dark:text-white hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 pt-3 sm:pt-0 border-t-2 sm:border-t-0 border-primary-light dark:border-[#ffffff1a]">
                        News{' '}
                        <RxCaretDown
                            className="inline-block relative transition-transform duration-[150] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                        <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                            <li className="row-span-3 grid">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="flex relative h-full w-full max-w-[376px] max-h-[268px] select-none flex-col rounded-lg bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] "
                                        href="/news"
                                    >
                                        <Image
                                            className="rounded-lg"
                                            src="/img/newsbg.png"
                                            fill
                                            alt="News Preview"
                                            style={{
                                                objectFit: "cover", objectPosition: "top",


                                            }}
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50 rounded-lg"></div>
                                        <div className="flex justify-center my-auto text-[18px] font-medium leading-[1.2] text-white z-30 ">
                                            Curated News
                                        </div>

                                    </a>
                                </NavigationMenu.Link>
                            </li>

                            <ListItem href="/news?category=innovation" title="Innovation">
                                New technologies and projects in blockchain and Web3
                            </ListItem>
                            <ListItem href="/news?category=market" title="Market Insights">
                                Market trends and analysis in crypto
                            </ListItem>
                            <ListItem href="/news?category=regulatory" title="Regulatory Updates">
                                Legal developments and government policies
                            </ListItem>

                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="block text-left text-sm text-primary-dark leading-8 dark:text-white hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 pt-3 sm:pt-0 border-t-2 sm:border-t-0 border-primary-light dark:border-[#ffffff1a]">
                        Guides{' '}
                        <RxCaretDown
                            className="inline-block relative transition-transform duration-[150] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                        <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.85fr_1fr]">
                            <li className="row-span-3 grid">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="flex relative h-full w-full max-w-[376px] max-h-[204px] select-none flex-col rounded-lg bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] "
                                        href="/news"
                                    >
                                        <Image
                                            className="rounded-lg"
                                            src="/img/guides.jpg"
                                            fill
                                            alt="Word Guides with a background of a city skyline, using arrows"
                                            style={{
                                                objectFit: "cover", objectPosition: "center",


                                            }}
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  bg-gradient-to-b from-transparent via-gray-800 to-black rounded-lg"></div>
                                        <div className="flex flex-col gap-4 text-center justify-center my-auto text-[18px] font-medium leading-[1.2] text-white z-30 ">
                                            Navigate Web3 safely

                                            <p className="flex justify-center text-white text-[14px] leading-[1.3] z-30">
                                                Step-by-step guides and tips to avoid scam projects.
                                            </p>
                                        </div>
                                    </a>

                                </NavigationMenu.Link>
                            </li>
                            <ListItem href="/#" title="Buy Cryptocurrencies">
                                {/* General Crypto Buying Guide */} Soon
                            </ListItem>
                            <ListItem href="/#" title="Centralized">
                                {/* Buy on centralized Exchanges */} Soon
                            </ListItem>
                            <ListItem href="/#" title="Decentralized">
                                {/* Buy on decentralized Exchanges (DEXs) */} Soon
                            </ListItem>

                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                {/* <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="block text-left text-sm text-primary-dark leading-8 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 pt-3 sm:pt-0 border-t-2 sm:border-t-0 border-primary-light dark:border-[#ffffff1a]">
                        Services{' '}
                        <RxCaretDown
                            className="inline-block relative transition-transform duration-[150] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                        <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                            <li className="row-span-3 grid">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="focus:shadow-violet7 from-purple-700 to-purple-900 flex
                    h-full w-full select-none flex-col justify-start rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                                        href="/"
                                    >

                                        <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                                            Audit
                                        </div>
                                        <p className="text-mauve4 text-[14px] leading-[1.3]">
                                            Soon
                                        </p>
                                    </a>
                                </NavigationMenu.Link>

                            </li>
                            <li className="row-span-3 grid">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="focus:shadow-violet7 from-purple-700 to-purple-900 flex
                    h-full w-full select-none flex-col justify-start rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                                        href="/"
                                    >

                                        <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                                            Development
                                        </div>
                                        <p className="text-mauve4 text-[14px] leading-[1.3]">
                                            Web2 + Web3 Full Stack Development
                                        </p>
                                    </a>
                                </NavigationMenu.Link>

                            </li>

                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                */}
                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="block text-left text-sm text-primary-dark leading-8 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 pt-3 sm:pt-0 border-t-2 sm:border-t-0 border-primary-light dark:border-[#ffffff1a]"
                        href="https://blog.decryptarea.com"
                    >
                        Blog
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="block text-left text-sm text-primary-dark leading-8 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 pt-3 sm:pt-0 border-t-2 sm:border-t-0 border-primary-light dark:border-[#ffffff1a]"
                        href="/contact"
                    >
                        Contact
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

            </NavigationMenu.List>

            <div className="perspective-[2000px] absolute top-full flex w-full ">

                <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative h-[var(--radix-navigation-menu-viewport-height)] w-full mt-2 origin-[top_center] overflow-hidden rounded-[6px] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-primary-dark  transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
            </div>
        </NavigationMenu.Root>
    );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <li>
        <NavigationMenu.Link asChild>
            <a
                className={classNames(
                    'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 dark:hover:bg-[#1C092B] block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
                    className
                )}
                {...props}
                ref={forwardedRef}
            >
                <div className="text-violet12 dark:text-violet8 mb-[5px] font-medium leading-[1.2]">{title}</div>
                <p className="text-mauve11 dark:text-gray-100 leading-[1.4]">{children}</p>
            </a>
        </NavigationMenu.Link>
    </li>
));
ListItem.displayName = 'ListItem';

export default NavLinks;



