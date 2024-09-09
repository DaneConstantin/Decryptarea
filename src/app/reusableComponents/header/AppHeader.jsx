'use client'
import { ThemeChanger } from "./DarkSwitch";
import { ThemeProvider } from "../../hooks/ThemeProvider";
import { motion } from 'framer-motion';
import Image from "next/image"
import Link from "next/link";
import HamburgerMenu from './hamburgerMenu';
import NavLinks from "./NavLinks";
import { Figtree } from 'next/font/google';

const figtree = Figtree({ subsets: ['latin'] })

export default function AppHeader() {

	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
			<motion.nav id="nav" className="w-full  mx-auto border-b-[1px] border-gray-200 dark:border-[#ffffff1a] z-20 p-4 fixed backdrop-blur bg-[#ffffffbb] dark:bg-[#0d0d0dbb]"
			>
				<div className="flex items-center justify-center max-w-[1440px] mx-auto">

					<Link href="/" className="flex gap-2">
						<Image src="/img/madeui-logo.png" width={25} height={25} alt="Made UI logo of a temple" className="p-0.5 dark:invert" />

						<h1 className={`${figtree.className} font-sans text-2xl font-medium leading-none`}>Made UI</h1>
					</Link>

					<div className="hidden sm:flex sm:justify-end sm:flex-grow"> {/* visible only on large screen */}
						<NavLinks />
						<ThemeChanger />
					</div>

					<HamburgerMenu /> {/* visible only on mobile */}
				</div>
			</motion.nav>
		</ThemeProvider >


	);
};