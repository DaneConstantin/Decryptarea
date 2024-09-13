
import Link from 'next/link';
import CardContent from '../../(main)/templates/CardContent';
import Container from '../Container';

import { SanityDocument } from "next-sanity"

import { sanityFetch } from "../../../../sanity/lib/fetch"
import { FEATURED_QUERY } from "../../../../sanity/lib/queries"
import { Key } from 'react';

async function getData() {
  const featured = await sanityFetch<SanityDocument[]>({
    query: FEATURED_QUERY,
  });

  return featured;

}
export default async function FeaturedTemplates() {
  const data = await getData();

  if (!data || data.length === 0) {
    return <section>No data </section>;
  }

  return (
    <section className="bg-white dark:bg-primary-dark border-y-[1px] border-gray-200 dark:border-[#ffffff1a]">
      <Container className="py-8 max-w-screen-xl xl:px-5 px-4 md:px-8">



        <div className="flex justify-left items-end gap-4">
          <h2>Full Templates</h2>
          <div className="flex flex-initial shrink-0  w-5 h-5 z-10 relative text-[#999] hover:text-black dark:hover:text-[#f0f0f0]">
            <Link
              href="/templates" className='text-sm flex whitespace-nowrap'
              aria-label="More Projects"
            >
              Explore All
            </Link>

            <Link
              href="/templates" className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="group" focusable="false">
                <g className="group-hover:text-black dark:group-hover:text-[#f0f0f0]" fill="currentColor">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </g>
              </svg>

            </Link>
          </div>



        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto my-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center sm:justify-items-stretch">
          {
            data.map((template: SanityDocument, index: Key | null | undefined) => (
              <CardContent key={index} propu={template} />
            ))
          }
        </div>

      </Container>
    </section >
  );
}
