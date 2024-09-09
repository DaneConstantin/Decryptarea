import Link from "next/link";

export default function NavLinks({ closeMenu }) {
    const navLinks = [
        { to: '/templates', label: 'Templates' },
        { to: '/audit', label: 'Audit' },
        { to: '/development', label: 'Development' },
        { to: 'https://blog.decrypteria.com', label: 'Blog' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <>
            {navLinks.map((link, index) => {
                const isFirstLink = index === 0;
                const borderClasses = isFirstLink ? 'border-t-0' : 'border-t-2';

                return (
                    <div
                        key={index}
                        className={`block text-left text-sm text-primary-dark leading-8 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 pt-3 sm:pt-0 ${borderClasses} sm:border-t-0 border-primary-light dark:border-[#ffffff1a]`}
                        aria-label={link.label}
                    > <Link href={link.to} onClick={closeMenu}>
                            {link.label}
                        </Link>
                    </div>
                );
            })}
        </>
    );
};
