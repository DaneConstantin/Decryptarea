import Link from 'next/link';
import { FaTelegram } from 'react-icons/fa6';


const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" width="30px" height="30px" aria-label="Twitter">
        <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
    </svg>
);

const SocialLink = ({ href, icon, label }) => (
    <Link href={href} className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center dark:text-gray-200 hover:bg-white/[.1] rounded-md transition" aria-label={label}>
            {icon}
       
    </Link>
);

export default function CopyRightAndLinks() {
    return (
        <footer className="max-w-[1440px] flex flex-col sm:flex-row justify-between items-center mx-auto p-4">
            <div className="flex justify-between items-center mb-4 sm:mb-0">
                <p className="text-sm text-gray-400">©{new Date().getFullYear()} DecryptArea. All rights reserved.</p>
            </div>
            <div className='flex space-x-4'>
                <SocialLink href="https://t.me/" icon={ <FaTelegram size={35} />} label="Telegram" />
                <SocialLink href="https://x.com/" icon={<TwitterIcon />} label="Twitter" />
            </div>
        </footer>
    );
}
