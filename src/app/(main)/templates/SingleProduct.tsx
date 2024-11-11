import Image from "next/image"
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import { SanityDocument } from "next-sanity"
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import NextBreadcrumb from "../../reusableComponents/NextBreadcrumb";
import PreviewButton from "../../reusableComponents/homepageElements/TemplateSection/PreviewButton";
import DownloadButton from "../../reusableComponents/homepageElements/TemplateSection/DownloadButton";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'defaultProjectId';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'defaultDataset';

const urlFor = (source: string) =>
    imageUrlBuilder({ projectId, dataset }).image(source)

export default function Product({ post }: { post: SanityDocument }) {
    const { title, mainImage, description, content, buyLink, integration, pricing, compatibility, useCase, slug, releaseDate } = post;
    return (
        <main className="container max-w-7xl mx-auto  mt-[100px]">
            <NextBreadcrumb
                homeElement={'Home'}
                separator={<span> <IoIosArrowForward /> </span>}
                activeClasses=''
                containerClasses='flex items-center py-2 text-[#999] pl-8'
                listClasses='hover:text-black dark:hover:text-[#f0f0f0] mx-3 text-sm'
                capitalizeLinks
            />
            <div className="flex flex-col-reverse lg:flex-row text-sm w-full">

                <div id="description" className="flex flex-col p-6 md:p-8 md:pr-12 lg:border-r border-gray-200 dark:border-[#ffffff1a] prose prose-base w-full lg:w-2/3 lg:max-w-4xl dark:prose-invert">
                    <div className="relative w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                        {mainImage ? (
                            <Image
                                className="m-0 mr-4 rounded-lg object-cover top-0"
                                src={urlFor(mainImage).quality(90).url()}
                                fill
                                alt={mainImage.alt || ""}
                            />
                        ) : null}
                    </div>

                    {content ? <PortableText value={content} /> : null}
                </div>


                <div id="details" className="flex flex-col gap-4 w-full lg:w-1/3 p-6 pl-12 lg:sticky top-[65px] lg:max-h-[420px] ">
                    <Link href='/templates' className="text-sm font-light hover:text-[#999]">
                        <GoArrowLeft style={{ "display": "inline", "marginRight": "4px" }} />
                        Back to Templates
                    </Link>
                    {title ? <h1 className="text-3xl font-bold leading-9 lg:text-4xl lg:leading-10">{title}</h1> : null}

                    {description ? <p className="text-[#666]">{description}</p> : null}

                    <div className="flex justify-center">
                        <PreviewButton link={`/templates/${slug.current}/preview`} />
                        <DownloadButton link={buyLink} />
                    </div>
                    <table className="table-auto border-collapse border-gray-200 dark:border-[#ffffff1a]">
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-[#ffffff1a] leading-10">
                                <th className="text-left">Last Updated</th>
                                <td className="text-right">
                                    {new Date(releaseDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-[#ffffff1a] leading-10">
                                <th className="text-left">Compatibility</th>
                                <td className="text-right">
                                    {compatibility}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-[#ffffff1a] leading-10">
                                <th className="text-left">Use Case</th>
                                <td className="text-right">
                                    {useCase}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-[#ffffff1a] leading-10">
                                <th className="text-left">Pricing</th>
                                <td className="text-right">
                                    {pricing}
                                </td>
                            </tr>
                            <tr className="leading-10">
                                <th className="text-left">Integration</th>
                                <td className="text-right">
                                    {integration}
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>


        </main >
    )
}