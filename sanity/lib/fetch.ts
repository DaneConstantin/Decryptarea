// ./sanity/lib/fetch.ts

import type { QueryParams } from "next-sanity";

import  client  from "./client";


/**
 * Used to fetch data in Server Components, it has built in support for handling Draft Mode and perspectives.
 * When using the "published" perspective then time-based revalidation is used, set to match the time-to-live on Sanity's API CDN (60 seconds)
 * and will also fetch from the CDN.
 * When using the "previewDrafts" perspective then the data is fetched from the live API and isn't cached, it will also fetch draft content that isn't published yet.
 */
export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    tags,
  }: {
    query: string
    params?: QueryParams | Promise<QueryParams>;
    tags?: string[]
  }) {
    const resolvedParams = await params;
    return client.fetch<QueryResponse>(query, resolvedParams , {
      next: {
        revalidate: 60, // for simple, time-based revalidation
        tags, // for tag-based revalidation
      },
    })
  }