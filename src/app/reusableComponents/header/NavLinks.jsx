import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { RxCaretDown } from "react-icons/rx";

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
                                        className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-start rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                                        href="/"
                                    >

                                        <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                                            Curated News by category
                                        </div>
                                        <p className="text-mauve4 text-[14px] leading-[1.3]">
                                            Easy to read - TL;DR versions
                                        </p>
                                    </a>
                                </NavigationMenu.Link>
                            </li>

                            <ListItem href="https://stitches.dev/" title="Tech News">
                                Blockchain programming and related
                            </ListItem>
                            <ListItem href="/colors" title="Crypto">
                                Top News from crypto space
                            </ListItem>
                            <ListItem href="https://icons.radix-ui.com/" title="Business & Political">
                                Top Political and business news from around the globe
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
                        <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                            <li className="row-span-3 grid">
                                <NavigationMenu.Link asChild>
                                    <div
                                        className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-start rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                                       
                                    >

                                        <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                                            Navigate Web3 safely
                                        </div>
                                        <p className="text-mauve4 text-[14px] leading-[1.3]">
                                            Step-by-step guides and tips to avoid scam projects.
                                        </p>
                                    </div>
                                </NavigationMenu.Link>
                            </li>
                            <ListItem href="/buy" title="Buy Cryptocurrencies">
                                General Crypto Buying Guide
                            </ListItem>
                            <ListItem href="" title="Centralized">
                                Buy on centralized Exchanges
                            </ListItem>
                            <ListItem href="/colors" title="Decentralized">
                                Buy on decentralized Exchanges (DEXs)
                            </ListItem>

                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
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
                                        className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-start rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                                        href="/"
                                    >

                                        <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                                            Audit
                                        </div>
                                        <p className="text-mauve4 text-[14px] leading-[1.3]">
                                            Audit your project here
                                        </p>
                                    </a>
                                </NavigationMenu.Link>

                            </li>
                            <li className="row-span-3 grid">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-start rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                                        href="/"
                                    >

                                        <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                                            Development
                                        </div>
                                        <p className="text-mauve4 text-[14px] leading-[1.3]">
                                            Development Services here
                                        </p>
                                    </a>
                                </NavigationMenu.Link>

                            </li>

                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="block text-left text-sm text-primary-dark leading-8 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 pt-3 sm:pt-0 border-t-2 sm:border-t-0 border-primary-light dark:border-[#ffffff1a]"
                        href="https://blog.decrypteria.com"
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



