
import { fetchRssFeed } from '../../utils/fetchRssFeed'; // Import the fetch function
import Image from 'next/image'; // Import the Image component from Next.js

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options); // 'en-GB' gives day month year format
};

export default async function News() {
  const url = 'https://bitcoinmagazine.com/.rss/full/';
  const posts = await fetchRssFeed(url); // Fetch posts

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Curated News</h1>

        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => {
            // Get the image URL from the `enclosure` tag if it exists
            const imageUrl = post['enclosure'] && post['enclosure'][0] ? post['enclosure'][0].url[0] : null;

            return (
              <article key={index} className="flex max-w-xl flex-col items-start justify-start">
                <div className="flex flex-wrap items-start pb-2 text-xs">
                  <time dateTime={post.pubDate[0]} className="text-gray-500 whitespace-nowrap">
                    {formatDate(post.pubDate[0])}
                  </time>
                  

                </div>
                {imageUrl && (
                  <div className="relative w-full h-52">
                    <Image
                      src={imageUrl}
                      alt={post.title[0]}
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 rounded-lg"
                    />
                  </div>
                )}

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.link[0]}>
                      <span className="absolute inset-0" />
                      {post.title[0]}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description[0]}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author}>
                        <span className="absolute inset-0" />
                        {post['dc:creator'] ? post['dc:creator'][0] : 'Unknown'}
                      </a>
                    </p>

                  </div>



                </div>
              </article >
            );
          })}
        </div>
      </div>
    </div>
  );
}
export const revalidate = 0;