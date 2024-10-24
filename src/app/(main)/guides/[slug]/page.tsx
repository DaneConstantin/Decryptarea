import { QueryParams, SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"

import { ALLGUIDES_QUERY, GUIDE_QUERY } from "../../../../../sanity/lib/queries"


import { sanityFetch } from "../../../../../sanity/lib/fetch"

import Guide from "./SingleGuide"


export async function generateStaticParams() {
    const posts = await sanityFetch<SanityDocument[]>({
        query: ALLGUIDES_QUERY,

    })

    return posts.map((post) => post.slug.current)
}

export default async function Page({ params }: { params: Promise<any> }) {
    const { slug } = params; // destructure the slug property
    const post = await sanityFetch<SanityDocument>({ query: GUIDE_QUERY, params: { slug } }) // pass the slug property to sanityFetch
    if (!post) {
        return notFound()
    }
    return <Guide post={post} />
}