import Image from "next/image";
import Link from "next/link";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

export default function ContactCard() {

    return (
        <>
            <div className="flex items-center justify-center flex-col w-48 space-y-4 p-4 rounded-xl bg-white shadow-sm dark:bg-gradient-to-b from-[#131415] to-[#050505] border border-[#ffffff1a] hover:border-[#ffffff33]">

                <div className="relative rounded-full aspect-square shadow-sm  w-20 h-20">
                    <Link href="https://x.com/realDcoder" className=" w-20 h-20" target="_blank">
                        <Image src="/img/small-profile.png" className="w-full h-full rounded-full" alt="Twitter Profile image"
                            fill
                        />
                    </Link>
                </div>
                <div className="flex flex-col text-center">
                    <h3 className="font-semibold">DCoder</h3>
                    <Link href="https://x.com/realDcoder" target="_blank" className="text-sm text-blue-600 font-bold dark:text-blue-500">
                        @realDcoder
                    </Link>
                </div>

                <Link href="https://x.com/realDcoder" target="_blank" className="px-4 py-1 text-sm whitespace-nowrap bg-gradient-to-b from-[#131415] to-[#050505] border border-[#ffffff1a] hover:border-[#ffffff33] dark:from-indigo-600 dark:to-indigo-600 dark:bg-gradient-none rounded-full text-gray-50 font-semibold"><FaXTwitter style={{ "display": "inline", "marginLeft": "2px" }} size={14} /> Follow me </Link>

            </div>

            <div className="flex items-center justify-center flex-col w-48 space-y-4 p-4 rounded-xl bg-white shadow-sm dark:bg-gradient-to-b from-[#131415] to-[#050505] border border-[#ffffff1a] hover:border-[#ffffff33]">
                <div className="flex items-center">
                    <Link href="https://t.me/dcoder0" target="_blank"> <FaTelegram size={35} />
                    </Link>
                </div>
                <div className="px-5">
                    <h3 className="font-semibold text-center text-gray-800 dark:text-gray-200">
                        Telegram
                    </h3>
                    <div className="text-sm text-[#999] dark:text-gray-300">
                        <Link href="https://t.me/dcoder0" target="_blank">
                            <div className="text-sm text-blue-600 font-bold dark:text-blue-500 my-2">
                                @t.me/dcoder0
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
