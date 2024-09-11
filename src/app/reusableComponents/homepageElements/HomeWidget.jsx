import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import TopNews from "../../(main)/news/TopNews"

const HomeWidget = () => {
    return (
        <section className="bg-white dark:bg-primary-dark ">
            <Container className="py-8 xl:px-5 px-4 md:px-8 mx-auto max-w-[1440px] ">
                <div className="flex justify-left items-end gap-4 mb-8">
                    <h2>Recent News</h2>
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
                <TopNews />
            </Container>

        </section>

    )
}

export default HomeWidget