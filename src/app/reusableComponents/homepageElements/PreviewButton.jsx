'use client'

import Link from "next/link";

const PreviewButton = ({ link }) => {

    return (
        <Link
            href={`${link}`}
            target="_blank"
        >
            <button
                type="button"
                className="inline-flex items-center p-2 text-black px-3 bg-gradient-to-b from-[#ffffff] to-[#ebebeb] dark:bg-[#f0f0f0] border border-gray-300 hover:border-[#ececec] hover:to-[#ececec] text-sm  rounded-l-xl"
            >
                <svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" className="w-4 h-4 mr-2">
                    <g id="SVGRepo_bgCarrier"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                        <g>
                            <path d="M51.8,25.1C47.1,15.6,37.3,9,26,9S4.9,15.6,0.2,25.1c-0.3,0.6-0.3,1.3,0,1.8C4.9,36.4,14.7,43,26,43 s21.1-6.6,25.8-16.1C52.1,26.3,52.1,25.7,51.8,25.1z M26,37c-6.1,0-11-4.9-11-11s4.9-11,11-11s11,4.9,11,11S32.1,37,26,37z">
                            </path>
                            <path d="M26,19c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S29.9,19,26,19z">
                            </path>
                        </g>
                    </g>
                </svg>
                Preview
            </button>
        </Link>
    );
}

export default PreviewButton;
