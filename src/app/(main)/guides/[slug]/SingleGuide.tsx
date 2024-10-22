//@ts-nocheck
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import { SanityDocument } from "next-sanity"
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import NextBreadcrumb from "@/app/reusableComponents/NextBreadcrumb";
import { MdInfo } from "react-icons/md";
import { slugify } from "@/app/utils/helpers";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'defaultProjectId';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'defaultDataset';

const urlFor = (source: string) =>
    imageUrlBuilder({ projectId, dataset }).image(source)


export default function Guide({ post }: { post: SanityDocument }) {
    const { title, mainImage, body, imgSource, headings } = post;

    return (
        <main className="container max-w-7xl mx-auto mt-[80px] lg:mt-[100px]">
            <NextBreadcrumb
                homeElement={'Home'}
                separator={<span> <IoIosArrowForward /> </span>}
                activeClasses=''
                containerClasses='flex items-center py-2 text-[#999] pl-8'
                listClasses='hover:text-black dark:hover:text-[#f0f0f0] mx-3 text-sm'
                capitalizeLinks
            />
            <div className="flex flex-col-reverse lg:flex-row text-sm w-full">

                <div id="description" className="flex flex-col p-8 pr-12 lg:border-r border-gray-200 dark:border-[#ffffff1a] prose prose-base w-full lg:w-2/3 lg:max-w-4xl  dark:prose-invert">
                    <div className="relative w-full h-screen max-h-[440px]">
                        {mainImage ? (

                            <Image
                                className="m-0 mr-4 rounded-lg"
                                src={urlFor(mainImage).quality(90).url()}
                                fill
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                alt={mainImage.alt || ""} />

                        ) : null}
                    </div>
                    <div className='flex items-center justify-center text-[#999] mb-2'>
                        <MdInfo size={18} />
                        <p className='text-xs ml-1 max-w-3xl leading-[0.25rem]'>Image by <Link href={imgSource.link} target="_blank">{imgSource.name}</Link> from <Link href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image">Pixabay</Link></p>
                    </div>
                    {body ? <PortableText
                        value={body}
                        components={myPortableTextComponents} /> : null}
                </div>

                <div id="details" className="flex flex-col gap-4 w-full lg:w-1/3 p-6 pl-12 lg:sticky top-[65px] self-start">
                    <Link href='/guides' className="text-sm font-light hover:text-[#999]">
                        <GoArrowLeft style={{ "display": "inline", "marginRight": "4px" }} />
                        Back to Guides
                    </Link>
                    {title ? <h1 className="text-3xl font-bold leading-9 lg:text-4xl lg:leading-10">{title}</h1> : null}

                    <Toc headings={headings} />

                </div>

            </div>


        </main >
    )
}

const myPortableTextComponents = {
    types: {
    },
    block: {
        h2: ({ value }: any) => (
            <h2
                id={slugify(value.children[0].text)}
                className="text-3xl font-bold mb-3 scroll-mt-24"
            >
                {value.children[0].text}
            </h2>
        ),
        h3: ({ value }: any) => (
            <h3
                id={slugify(value.children[0].text)}
                className="text-2xl font-bold mb-3 scroll-mt-24"
            >
                {value.children[0].text}
            </h3>
        ),
        h4: ({ value }: any) => (
            <h4
                id={slugify(value.children[0].text)}
                className="text-2xl font-bold mb-3 scroll-mt-24"
            >
                {value.children[0].text}
            </h4>
        ),
        h5: ({ value }: any) => (
            <h5
                id={slugify(value.children[0].text)}
                className="text-2xl font-bold mb-3 scroll-mt-24"
            >
                {value.children[0].text}
            </h5>
        ),
        h6: ({ value }: any) => (
            <h6
                id={slugify(value.children[0].text)}
                className="text-xl font-bold mb-3 scroll-mt-24"
            >
                {value.children[0].text}
            </h6>
        ),
    },
};


const Toc = ({ headings }: any) => {
    return (
        <div className="toc">
            <h2 className="text-xl font-semibold my-4">Quick Navigation</h2>
            <nav>
                <ul className="space-y-2">
                    {headings?.map((heading: any) => (
                        <li key={heading?.key} className="text-blue-500 hover:underline">
                            <a href={`#${slugify(heading.children[0].text)}`}>
                                {heading.children[0].text}</a>
                        </li>
                    ))}

                </ul>
            </nav>

        </div>
    )
}
