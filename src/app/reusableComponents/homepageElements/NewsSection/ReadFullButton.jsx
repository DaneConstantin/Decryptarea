'use client'

import Link from "next/link";
import { SlBookOpen } from "react-icons/sl";
const ReadFull = ({ link }) => {

    return (
        <Link
            href={`${link}`}
            target="_blank"
        >
            <button
                type="button"
                className="inline-flex items-center p-2 text-black px-3 bg-gradient-to-b from-[#ffffff] to-[#ebebeb] dark:bg-[#f0f0f0] border border-gray-300 hover:border-[#ececec] hover:to-[#ececec] text-sm  rounded-xl"
            >
                <SlBookOpen className="mr-2" />
                Read Full Article
            </button>
        </Link>
    );
}

export default ReadFull
