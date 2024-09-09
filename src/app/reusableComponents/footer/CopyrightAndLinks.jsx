import Link from 'next/link';
import { FaTelegram } from 'react-icons/fa6';

const GitHubIcon = () => (
    <svg className='flex items-center' xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" viewBox="0 0 20 20" aria-label="GitHub">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
);

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
                <p className="text-sm text-gray-400">©{new Date().getFullYear()} Made UI. All rights reserved.</p>
            </div>
            <div className='flex space-x-4'>
                <SocialLink href="https://t.me/madeui_code" icon={ <FaTelegram size={35} />} label="Telegram" />
                <SocialLink href="https://x.com/ethicoder" icon={<TwitterIcon />} label="Twitter" />
            </div>
        </footer>
    );
}
