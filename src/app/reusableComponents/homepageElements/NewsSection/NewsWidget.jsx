import React from 'react'
import Container from '../../Container'
import Link from 'next/link'
import TopNews from "../../../(main)/news/TopNews"
import { MdInfo } from "react-icons/md";

const NewsWidget = () => {
    return (
        <section className="bg-white dark:bg-primary-dark ">
            <Container className="py-8 xl:px-5 px-4 md:px-8 mx-auto max-w-[1440px] ">
                <div className="flex justify-left items-center gap-4">
                    <h2 className='text-xl font-bold'>Latest Curated News</h2>
                    <div className="flex flex-initial shrink-0  w-5 h-5 z-10 relative text-[#999] hover:text-black dark:hover:text-[#f0f0f0]">
                        <Link
                            href="/news" className='text-sm flex whitespace-nowrap'
                            aria-label="More Projects"
                        >
                            Explore All
                        </Link>

                        <Link
                            href="/news" className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="group" focusable="false">
                                <g className="group-hover:text-black dark:group-hover:text-[#f0f0f0]" fill="currentColor">
                                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                                </g>
                            </svg>

                        </Link>
                    </div>



                </div>
                <div className='flex items-center text-[#999] mt-4 mb-6'>
                    <MdInfo size={22} />
                    <p className='text-sm ml-2 max-w-3xl'>Manually curated news on <b>industry movements</b>, significant <b>regulatory changes</b>, and <b>major developments</b> that could shape the future trajectory of the Web3 space. All links are external.</p>
                </div>
                <TopNews />
            </Container>

        </section>

    )
}

export default NewsWidget