import { fetchRssFeed } from '../../../utils/fetchRssFeed'; // Import the fetch function

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-US', options); // 'en-US' gives day month year format
};

export default async function News() {
  // First RSS feed URL
  const url1 = 'https://bitcoinmagazine.com/.rss/full/';
  // Second RSS feed URL
  const url2 = 'https://cointelegraph.com/rss/tag/blockchain'; // Replace with your second URL

  // Fetch both RSS feeds concurrently
  const [posts1, posts2] = await Promise.all([fetchRssFeed(url1), fetchRssFeed(url2)]);

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* First Feed Column */}
          <div>
            <h2 className="text-2xl font-bold">
              <a href={url1} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                {url1}
              </a>
            </h2>
            <ol className="list-decimal ml-5">
              {posts1.map((post, index) => (
                <li key={index} className="my-4">
                  <article className="flex flex-col items-start justify-start">
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.link[0]} target="_blank" rel="noopener noreferrer">
                          <span className="absolute inset-0" />
                          {post.title[0]}
                        </a>
                      </h3>
                      <time dateTime={post.pubDate[0]} className="text-gray-500 whitespace-nowrap">
                        {formatDate(post.pubDate[0])}
                      </time>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          {/* Second Feed Column */}
          <div>
            <h2 className="text-2xl font-bold">
              <a href={url2} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                {url2}
              </a>
            </h2>
            <ol className="list-decimal ml-5">
              {posts2.map((post, index) => (
                <li key={index} className="my-4">
                  <article className="flex flex-col items-start justify-start">
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.link[0]} target="_blank" rel="noopener noreferrer">
                          <span className="absolute inset-0" />
                          {post.title[0]}
                        </a>
                      </h3>
                      <time dateTime={post.pubDate[0]} className="text-gray-500 whitespace-nowrap">
                        {formatDate(post.pubDate[0])}
                      </time>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 0;
