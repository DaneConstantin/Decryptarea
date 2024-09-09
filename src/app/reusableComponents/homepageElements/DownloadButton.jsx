'use client'

import Link from "next/link";

function DownloadButton({ link }) {

    return (
        <Link
            href={`${link}`}
            type="button"
            target="_blank"
            className="inline-flex items-center p-2 px-3 text-[#f0f0f0] bg-gradient-to-b from-[#131415] to-[#050505] border border-l-0 border-[#ffffff1a] hover:border-[#ffffff33] text-sm rounded-r-xl"
        >
            Get Code
            <svg className="ml-2" fill="none" height="18" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3">
                </path>
            </svg>

        </Link>
    );
}

export default DownloadButton;
