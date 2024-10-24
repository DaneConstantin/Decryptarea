import { QueryParams, SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"

import { ALLPRODUCTS_QUERY, PRODUCT_QUERY } from "../../../../../sanity/lib/queries"


import { sanityFetch } from "../../../../../sanity/lib/fetch"
import Product from "../SingleProduct"


export async function generateStaticParams() {
    const posts = await sanityFetch<SanityDocument[]>({
        query: ALLPRODUCTS_QUERY,

    })

    return posts.map((post) => ({
        slug: post.slug.current,
    }))
}

export default async function Page({ params }: QueryParams) {
    const { slug } = await params;

    // Use the 'slug' property in the fetch operation
    const post = await sanityFetch<SanityDocument>({
        query: PRODUCT_QUERY,
        params: { slug }, // Pass only the slug here
    });
    if (!post) {
        return notFound()
    }
    return <Product post={post} />
}