import Image from "next/image";
import Container from "../../reusableComponents/Container";
import Link from "next/link";
import ContactCard from "@/app/reusableComponents/homepageElements/ContactSection/ContactCard";


export default function About() {

    return (
        <>
            <Container>
                <div className="my-40 max-w-6xl mx-auto">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center items-center justify-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Building the Future of Web3 Development</h1>
                        <p className="text-gray-500 mt-4 w-full px-20 tracking-wide text-center leading-8 lg:leading-normal">
                            Empowering everyone to create a decentralized world.
                        </p>
                        <div className="relative w-[400px] h-[400px] flex justify-center">
                            <Image
                                className="rounded-lg"
                                src="/img/aboutDesign.png"
                                fill
                                style={{ objectPosition: "center" }}
                                alt="About Design"
                            />
                        </div>



                        <div className="pt-3 pr-3 pb-3 pl-4 flex items-center bg-n920 border border-n800 rounded-lg mt-6 mb-2 tablet:mt-4 tablet:mb-0">
                            <p className=" flex-none text-n100 mr-4">For any content related, please contact us at <Link href="mailto:contact@decryptarea.com" className="text-blue-600 underline hover:text-blue-800">contact@decryptarea.com</Link></p>

                        </div>

                        <div className="pt-3 pr-3 pb-3 pl-4 flex items-center bg-n920 border border-n800 rounded-lg mt-6 mb-2 tablet:mt-4 tablet:mb-0">
                            <span className=" flex-none text-n100 mr-4">For any template/development issue, please contact </span>
                            <div className="flex mx-auto">
                                <div className="grid max-w-screen-xs grid-rows-1 gap-6 mx-auto my-10 sm:grid-cols-2">

                                    <ContactCard />

                                </div>
                            </div>
                        </div>
                        <div id="mission" className="mt-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h1>
                            <p className="text-gray-700 mt-4 font-normal text-xl w-full text-center leading-6 lg:leading-normal">At DecryptArea, our mission is to democratize access to Web3 technologies. We aim to equip developers with the knowledge, resources, and community support they need to innovate and excel in a decentralized landscape. We believe in fostering a vibrant ecosystem where creativity and collaboration thrive.</p>
                        </div>

                    </div>
                </div>
            </Container >
        </>
    )
}
