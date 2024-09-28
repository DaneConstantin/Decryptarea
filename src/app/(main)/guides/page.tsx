import { SanityDocument } from "next-sanity"

import { sanityFetch } from "../../../../sanity/lib/fetch"
import { FEATURED_GUIDES } from "../../../../sanity/lib/queries"
import FeaturedArticle from "./FeaturedArticles";
import { Key } from 'react';

export default async function Guides() {

    const guides = await sanityFetch<SanityDocument[]>({
        query: FEATURED_GUIDES,
    })


    if (!guides || guides.length === 0) {
        return <section>No data </section>;
    }
    return (
        <>
            <section className="flex items-center justify-center text-center px-4 bg-[#ffffffbb] dark:bg-[#0d0d0dbb] pt-32 pb-16">
                <div className="max-w-2xl space-y-4">
                    <h1 className="text-2xl font-bold tracking-tight md:text-5xl">Guides</h1>
                    <p className="text-base text-[#999] md:leading-relaxed">TBD</p>
                </div>
            </section>
            <section className="relative " >

                {
                    guides.map((template: SanityDocument, index: Key | null | undefined) => (
                        <FeaturedArticle key={index} propu={template} />
                    ))
                }

            </section>

        </>
    );
};


