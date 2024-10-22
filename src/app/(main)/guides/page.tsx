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
            <section className="container mx-auto px-4 py-24 sm:py-32">

                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl ">Guides</h1>
                    <p className="text-base text-[#999] md:leading-relaxed py-4">Easy-to-follow tutorials and resources of Web3. Start your journey today!</p>
                </div>

                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {
                        guides.map((guide: SanityDocument, index: Key | null | undefined) => (
                            <article key={index} className="flex max-w-xl flex-col items-start justify-start">
                                <FeaturedArticle key={index} propu={guide} />
                            </article>
                        ))
                    }
                </div>
            </section>

        </>
    );
};


