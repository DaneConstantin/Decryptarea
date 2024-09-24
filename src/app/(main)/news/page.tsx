
import { fetchRssFeed } from '../../utils/fetchRssFeed'; // Import the fetch function
import Image from 'next/image'; // Import the Image component from Next.js

import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { CURATED_NEWS } from "../../../../sanity/lib/queries";
import DescriptionText from './DescriptionText';

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options); // 'en-GB' gives day month year format
};


async function getSanityTitles() {
  const featured = await sanityFetch<SanityDocument[]>({
    query: CURATED_NEWS,
  });

  if (!featured || featured.length === 0) {
    return [];
  }

  // Extract titles
  const titles = featured.map((title: SanityDocument) => title.link);
  return titles;
}



export default async function News() {
  const urls = [
    'https://bitcoinmagazine.com/.rss/full/',
    'https://cointelegraph.com/rss/tag/blockchain', // Add more URLs as needed
    'https://www.coindesk.com/arc/outboundfeeds/rss/'   // Example of a third URL
  ];

  // Fetch all RSS posts concurrently
  const rssPostsArray = await Promise.all(urls.map(url => fetchRssFeed(url)));

  // Flatten the array of posts
  const rssPosts = rssPostsArray.flat();
  // Fetch Sanity titles
  const sanityTitles = await getSanityTitles();

  // Filter RSS articles that match the Sanity titles
  const matchingArticles = rssPosts.filter((post: { link: any[] }) =>
    sanityTitles.some((title) => title === post.link[0])
  );
  console.log(matchingArticles);


  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl">Latest Curated News</h1>
        {matchingArticles.length > 0 ? (
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {matchingArticles
              .sort((a: SanityDocument, b: SanityDocument) => {
                return new Date(b.pubDate[0]).getTime() - new Date(a.pubDate[0]).getTime();
              })
              .map((article: SanityDocument, index) => {
                const imageUrl = article['media:content'] && article['media:content'][0] ? article['media:content'][0].url[0] : null;



                return (
                  <article key={index} className="flex max-w-xl flex-col items-start justify-start">
                    <div className="flex flex-wrap items-start pb-2 text-xs">
                      <time dateTime={article.pubDate[0]} className=" whitespace-nowrap my-2 text-xs opacity-[0.5]">
                        {formatDate(article.pubDate[0])}
                      </time>


                    </div>
                    {imageUrl && (
                      <div className="relative w-full h-52">
                        <Image
                          src={imageUrl}
                          alt={article.title[0]}
                          fill
                          objectFit="cover"
                          className="absolute inset-0 rounded-lg"
                        />
                      </div>
                    )}

                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6  group-hover:text-gray-600">
                        <a href={article.link[0]}>
                          <span className="absolute inset-0" />
                          {article.title[0]}
                        </a>
                      </h3>
                      <DescriptionText article={article} />
                    </div>
                    <div className="relative mt-4 flex items-center gap-x-4">
                      <div className="text-sm leading-6">
                        <p className="font-semibold ">
                          <a href={article.author}>
                            <span className="absolute inset-0" />
                            {article['dc:creator'] ? article['dc:creator'][0] : 'Unknown'}
                          </a>
                        </p>

                      </div>



                    </div>
                  </article >
                );
              })}

          </div>
        ) : (
          <p>No matching articles found.</p>
        )}
      </div>
    </div>
  );
}
export const revalidate = 0;