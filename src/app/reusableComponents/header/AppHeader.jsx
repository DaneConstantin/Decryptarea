'use client'
import { ThemeChanger } from "./DarkSwitch";
import { ThemeProvider } from "../../hooks/ThemeProvider";
import { motion } from 'framer-motion';
import Image from "next/image"
import Link from "next/link";
import HamburgerMenu from './hamburgerMenu';
import NavLinks from "./NavLinks";

export default function AppHeader() {

	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
			<motion.nav id="nav" className="w-full  mx-auto border-b-[1px] border-gray-200 dark:border-[#ffffff1a] z-20 p-4 fixed backdrop-blur bg-[#ffffffbb] dark:bg-[#0d0d0dbb]"
			>
				<div className="flex items-center justify-center max-w-[1440px] mx-auto">

					<Link href="/" className="flex gap-2">
						<Image src="/img/cryptostats.png" width={160} height={44} alt="Decryptarea logo" className="p-0.5 dark:invert" />

						
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