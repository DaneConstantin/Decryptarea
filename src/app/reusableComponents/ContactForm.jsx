'use client'

import { BsRocketTakeoffFill } from "react-icons/bs";
import { useForm, ValidationError } from "@formspree/react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_MADEUI_CONTACT);

    if (state.succeeded) {
        return (

            <div className=" p-8 text-center w-full px-4 lg:w-1/2 xl:w-5/12 z-[10]">
                <div className="justify-center flex">
                    <IoMdCheckmarkCircleOutline size={44} style={{ color: 'green' }} />
                </div>

                <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                <p className="text-gray-600">I got your message!</p>
            </div>

        )
    }


    return (
        <div className="w-full px-4 lg:w-1/2 xl:w-5/12 z-[10]">
            <div className="relative rounded-lg p-8 shadow-lg sm:p-12 bg-white dark:bg-slate-900">
                <form onSubmit={handleSubmit}>

                    <div className="mb-6">
                        <label htmlFor="name">Name</label>
                        <input id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full rounded-lg px-[14px] py-3 text-sm text-body-color outline-none  border border-gray-300 dark:border-[#3d3d3d] dark:hover:border-[#ffffff33] dark:hover:to-[#181818] focus:border-black dark:focus:border-[#333]"

                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email">Email Address</label>
                        <input id="email"
                            type="email"
                            name="email"
                            placeholder="youremail@gmail.com"
                            className="w-full rounded-lg px-[14px] py-3 text-sm text-body-color outline-none  border border-gray-300 dark:border-[#3d3d3d] dark:hover:border-[#ffffff33] dark:hover:to-[#181818] focus:border-black dark:focus:border-[#333]"
                            required
                        />
                    </div>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <div className="mb-6">
                        <label htmlFor="message">Your Message</label>
                        <textarea rows={4}
                            required
                            id="message" name="message"

                            minLength={10}
                            maxLength={500}

                            placeholder="Say it here..."
                            className="w-full rounded-lg px-[14px] py-3 text-sm text-body-color outline-none  border border-gray-300 dark:border-[#3d3d3d] dark:hover:border-[#ffffff33] dark:hover:to-[#181818] focus:border-black dark:focus:border-[#333]" />
                    </div>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className={`w-full rounded-lg  border border-gray-300 dark:border-[#3d3d3d] dark:hover:border-[#dddddd33] p-3 text-[#f0f0f0] transition hover-bg-opacity-90 ${state.submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-b from-[#3d3d3d] to-[#050505]'
                                }`}
                        >
                            Send <BsRocketTakeoffFill className="inline ml-1 text-yellow-200" />

                        </button>
                        <ValidationError errors={state.errors} />
                    </div>

                </form>
                <div>
                    <span className="absolute -right-10 -top-10 z-[-1]">
                        <svg
                            width={100}
                            height={100}
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                fill="#3d3d3d"
                            />
                        </svg>
                    </span>
                    <span className="absolute -left-10 -bottom-10 z-[-1]">
                        <svg
                            width={100}
                            height={100}
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: 'rotate(180deg)' }}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                fill="#3d3d3d"

                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div>

    )
}