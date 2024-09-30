
export default function ServiceCard() {

    return (
        <>
            <div className="flex items-center justify-center flex-col w-72 h-36 space-y-4 p-4 rounded-xl bg-white shadow-sm dark:bg-gradient-to-b from-[#131415] to-[#050505] border border-[#ffffff1a] hover:border-[#ffffff33]">

                <a
                    className=" flex
                    h-full w-full flex-col justify-start rounded-[6px] p-[25px] no-underline outline-none"
                    href="#"
                >

                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] ">
                        Audit
                    </div>
                    <p className="text-mauve8 text-[14px] leading-[1.3]">
                        Soon
                    </p>
                </a>

            </div>

            <div className="flex items-center justify-center flex-col w-72 h-36 space-y-4 p-4 rounded-xl bg-white shadow-sm dark:bg-gradient-to-b from-[#131415] to-[#050505] border border-[#ffffff1a] hover:border-[#ffffff33]">
                <a
                    className=" flex
                    h-full w-full flex-col justify-start rounded-[6px] p-[25px] no-underline outline-none"
                    href="#"
                >

                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] ">
                        Full Stack Development
                    </div>
                    <p className="text-mauve8 text-[14px] leading-[1.3]">
                        Soon
                    </p>
                </a>
            </div>
        </>
    );
}
