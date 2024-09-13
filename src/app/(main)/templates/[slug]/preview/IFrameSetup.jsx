"use client"
import './previewCSS.css';
// import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Figtree } from 'next/font/google';

const figtree = Figtree({ subsets: ['latin'] })

const PreviewFrame = ({ iFrameLink }) => {
    const [iframeWidth, setIframeWidth] = useState('100%');
    const [iframeHeight, setIframeHeight] = useState('100%');
    const [activeButton, setActiveButton] = useState('large');

    const setSmallSize = () => {
        setIframeWidth('375px');
        setIframeHeight('100%');
        setActiveButton('small');
    };

    const setMediumSize = () => {
        setIframeWidth('768px');
        setIframeHeight('100%');
        setActiveButton('medium');

    };

    const setLargeSize = () => {
        setIframeWidth('100%');
        setIframeHeight('100%');
        setActiveButton('large');
    };

    const isSmallOrMedium = iframeWidth !== '100%';

    return (
        <main className='min-h-screen'>
            <div className="w-full px-5 bg-purple-900 border-b border-blue-500 z-10">
                <nav className="flex items-center justify-between py-4">
                    <div className="justify-start flex items-center gap-4 flex-1">
                        <Link href="/" className="flex gap-2">
                            {/* <Image src="/img/madeui-logo.png" width={25} height={25} alt="Made UI logo of a temple" className="p-0.5 invert" /> */}

                            <h1 className={`${figtree.className} font-sans text-2xl font-medium leading-none text-white `}>DecryptArea</h1>
                        </Link>
                    </div>
                    <div className="hidden w-max sm:flex sm:flex-col sm:align-center">
                        <div className="relative self-center bg-gray-200 rounded-lg p-0.5 flex">
                            <button
                                className={
                                    activeButton === 'small'
                                        ? 'lg:flex justify-center relative hidden lg:w-1/3 rounded-lg py-1.5 text-sm font-medium text-gray-900 whitespace-nowrap sm:px-4 bg-white border-gray-200 shadow-sm'
                                        : 'lg:flex justify-center relative hidden lg:w-1/3 rounded-lg py-1.5 text-sm font-medium text-gray-500 whitespace-nowrap sm:px-4 bg-gray-200'
                                }
                                onClick={setSmallSize}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                            </button>
                            <button
                                className={
                                    activeButton === 'medium'
                                        ? 'lg:flex justify-center relative hidden lg:w-1/3 rounded-lg py-1.5 text-sm font-medium text-gray-900 whitespace-nowrap sm:px-4 bg-white border-gray-200 shadow-sm'
                                        : 'lg:flex justify-center relative hidden lg:w-1/3 rounded-lg py-1.5 text-sm font-medium text-gray-500 whitespace-nowrap sm:px-4 bg-gray-200'
                                }
                                onClick={setMediumSize}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                            </button>
                            <button
                                className={
                                    activeButton === 'large'
                                        ? 'lg:flex justify-center relative hidden lg:w-1/3 rounded-lg py-1.5 text-sm font-medium text-gray-900 whitespace-nowrap sm:px-4 bg-white border-gray-200 shadow-sm'
                                        : 'lg:flex justify-center relative hidden lg:w-1/3 rounded-lg py-1.5 text-sm font-medium text-gray-500 whitespace-nowrap sm:px-4 bg-gray-200'
                                }
                                onClick={setLargeSize}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-end flex-1 gap-4 text-[#f0f0f0] text-sm leading-normal">
                        <Link className="p-3 px-4 rounded-xl bg-gradient-to-b from-[#131415] to-[#050505] border border-[#ffffff1a] hover:border-[#ffffff33]" href="/templates/">
                            <span className="sm:hidden"> Download</span>
                            <span className="hidden sm:flex"> Download Template</span>
                        </Link>
                        <Link href={iFrameLink} rel="noopener" className="text-gray-200 hover:text-gray-400" title="Close Frame">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </Link>
                    </div>
                </nav>
            </div>
            <div className={isSmallOrMedium ? 'bg-gray-100 transition-all duration-1000 py-8 px-5 ' : ' transition-all duration-1000 '}>
                <div className={isSmallOrMedium ? 'transition-all max-w-fit mx-auto duration-1000 translate-[0] overflow-hidden h-[calc(100vh-9rem)] flex justify-center border-[14px] border-gray-300 rounded-xl' : 'transition-all max-w-full mx-auto duration-1000 translate-[0] overflow-hidden h-[calc(100vh-5rem)] flex justify-center'}
                >
                    <iframe
                        src={iFrameLink}

                        className='transition-all duration-500 '
                        style={{ width: iframeWidth, height: iframeHeight }}
                    ></iframe>
                </div>
            </div>

        </main>
    );
}

export default PreviewFrame;

