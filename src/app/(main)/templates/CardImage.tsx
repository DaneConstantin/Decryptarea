"use client"
import Image from "next/image"
import Link from 'next/link';
import imageUrlBuilder from "@sanity/image-url"

const urlFor = (source: string) =>
    imageUrlBuilder({ projectId, dataset }).image(source)

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'defaultProjectId';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'defaultDataset';

const CardImage = ({ previewImg, slug }: { previewImg: string, slug: string }) => {
    return (
        <div className="flex h-[250px] w-auto rounded-xl m-3 md:m-5">
            <div className="w-full h-auto overflow-hidden">
                <div className="relative w-full h-full">
                    <Link href={`/templates/${slug}`}>
                        {previewImg ? (
                            <Image
                                className="rounded-lg"
                                src={urlFor(previewImg).quality(90).url()}
                                width={500}
                                height={800}
                                alt="Template preview image"
                                style={{
                                    objectFit: "cover", objectPosition: "top",


                                }}
                                onMouseEnter={() => setScroll(true)}
                                onMouseLeave={() => setScroll(false)}
                            />
                        ) :
                            <Image
                                className="rounded-lg"
                                src="https://picsum.photos/312/350"
                                width={500}
                                height={800}
                                alt="image not available"
                                style={{
                                    objectFit: "cover", objectPosition: "top",

                                }}
                            />}
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default CardImage;