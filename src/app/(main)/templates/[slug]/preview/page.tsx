
import './previewCSS.css';
import PreviewFrame from './IFrameSetup'
import { QueryParams, SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"
import { ALLPRODUCTS_QUERY, PRODUCT_QUERY } from "../../../../../../sanity/lib/queries"
import { sanityFetch } from "../../../../../../sanity/lib/fetch"

export async function generateStaticParams() {
    const post = await sanityFetch<SanityDocument[]>({
        query: ALLPRODUCTS_QUERY,

    })

    return post.map((post) => ({
        slug: post.slug.current,
    }))
}


export default async function Preview({ params }: { params: QueryParams }) {

    const post = await sanityFetch<SanityDocument>({ query: PRODUCT_QUERY, params })
    if (!post) {
        return notFound()
    }
    if (!post.previewLink) {
        return notFound()
    }
    return (
        <PreviewFrame iFrameLink={post.previewLink} />
    );
}

