import Image from 'next/image'
import Link from 'next/link'
import { Figtree } from 'next/font/google';

const figtree = Figtree({ subsets: ['latin'] })


const LinkItem = ({ href, text }) => (
    <Link className="inline-flex  text-sm gap-x-2 text-[#999] hover:text-gray-800 dark:hover:text-gray-200" href={href}>
        {text}
    </Link>
);

const aboutMe = [
    { href: '/contact', text: 'Contact Me' },
    { href: '#', text: 'Hire me' },
];

const productLinks = [
    { href: '/templates', text: 'Free Website Designs' },
    { href: '/templates', text: 'Web Applications' },
    { href: '/templates', text: 'Landing Pages' },
];
const infoLinks = [
    { href: '/faq', text: 'FAQ' },
    { href: '/terms', text: 'Terms & License Agreement' },
    { href: '/privacy-policy', text: 'Privacy Policy' }
];



export default function FooterMenu() {
    return (
        <div className="flex flex-col">
            <div className="col-span-full">
                <Link href="/" className="flex gap-2">
                    <Image src="/img/madeui-logo.png" width={35} height={35} alt="Made UI logo of a temple" className="p-0.5 dark:invert" />

                    <h1 className={`${figtree.className} font-sans text-4xl font-medium leading-none`}>Made UI</h1>

                </Link>
                <p className='text-xs py-2'>Next-Gen Templates for Speedy Development </p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="place-content-start items-start flex flex-auto flex-col gap-16 min-h-min-content overflow-hidden p-0 relative w-full">
                    <div className="flex flex-col gap-4">
                        <p className="text-md leading-tight dark:text-gray-100">Did one of my components or templates helped you?<br></br> Kindly support me:</p>
                        <Link href="https://www.buymeacoffee.com/madeui" target="_blank" className="flex items-center w-52 h-14 bg-yellow-400 text-black rounded-lg border border-transparent p-2 text-base tracking-wider shadow-sm hover:shadow-md opacity-85">
                            <Image src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                                height={0}
                                width={0}
                                alt="Buy Me A Coffee"
                                style={{ width: '20px', height: "auto" }} />
                            <span className="ml-4 font-semibold ">Keep me coding</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    <div className="col-span-1">
                        <h3 className="my-3">Made UI </h3>
                        <div className="flex items-center md:items-start space-x-4 md:space-x-0 md:flex-col md:space-y-3">
                            {aboutMe.map((item, index) => (
                                <LinkItem key={index} href={item.href} text={item.text} />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h3 className="my-3">Products</h3>
                        <div className="flex items-center md:items-start space-x-4 md:space-x-0 md:flex-col md:space-y-3">
                            {productLinks.map((item, index) => (
                                <LinkItem key={index} href={item.href} text={item.text} />
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h3 className="my-4">Information</h3>
                        <div className="flex items-center md:items-start space-x-4 md:space-x-0 md:flex-col md:space-y-3">
                            {infoLinks.map((item, index) => (
                                <LinkItem key={index} href={item.href} text={item.text} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}