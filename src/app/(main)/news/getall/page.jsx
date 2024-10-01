import { fetchRssFeed } from '../../../utils/fetchRssFeed'; // Import the fetch function

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-US', options); // 'en-US' gives day month year format
};

export default async function News() {
  const urls = [
    'https://bitcoinmagazine.com/.rss/full/',
    'https://cointelegraph.com/rss/tag/altcoin',
    'https://cointelegraph.com/rss/tag/bitcoin',
    'https://cointelegraph.com/rss/tag/blockchain',
    'https://cointelegraph.com/rss/tag/ethereum',
    'https://cointelegraph.com/rss/category/analysis',
    'https://cointelegraph.com/rss/category/market-analysis',
    'https://cointelegraph.com/rss/category/weekly-overview',
    'https://cointelegraph.com/rss/tag/regulation',
    'https://cointelegraph.com/rss/category/in-depth',
    'https://www.coindesk.com/arc/outboundfeeds/rss/',
    'https://thedefiant.io/api/feed',
    'https://www.theblock.co/rss.xml',
    'https://nftnewstoday.com/feed/',
    'https://www.newsbtc.com/feed/',
    'https://decrypt.co/feed',
  ];

  // Fetch both RSS feeds concurrently
  const rssPostsArray = await Promise.all(urls.map((url) => fetchRssFeed(url)));
  const rssPosts = rssPostsArray.flat();

  // Sort articles by date
  const sortedArticles = rssPosts.sort((a, b) => {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
  });

  // Group articles by date
  const articlesByDate = sortedArticles.reduce((acc, article) => {
    const date = new Date(article.pubDate[0]).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(article);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {Object.entries(articlesByDate).map(([date, articles], index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{date}</h3>
              <ol className="list-decimal ml-5">
                {articles.map((post, index) => (
                  <li key={index} className="my-4">
                    <article className="flex flex-col items-start justify-start">
                      <div className="group relative">
                        <h4 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a
                            href={post.link[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="absolute inset-0" />
                            {post.title[0]}
                          </a>
                        </h4>
                        <time dateTime={post.pubDate[0]} className="text-gray-500 whitespace-nowrap">
                          {formatDate(post.pubDate[0])}
                        </time>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const revalidate = 0;
