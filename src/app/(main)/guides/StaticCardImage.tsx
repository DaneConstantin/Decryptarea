"use client"
import Image from "next/image"
import imageUrlBuilder from "@sanity/image-url"

const urlFor = (source: string) =>
    imageUrlBuilder({ projectId, dataset }).image(source)

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'defaultProjectId';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'defaultDataset';

const StaticCardImage = ({ previewImg }: { previewImg: string }) => {

    return (
        <div className="flex h-[250px] w-auto rounded-xl mb-0 m-3 md:m-5 md:mb-0">
            <div className="w-full h-auto overflow-hidden">
                <div className="relative w-full h-full">
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

                </div>

            </div>
        </div>
    )
}

export default StaticCardImage;