// News.tsx (Server Component)
import { fetchRssFeed } from '../../../utils/fetchRssFeed';
import ArticleItem from './ArticleItem'; // Import the client component

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

  // Fetch RSS posts from each URL
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
                  <ArticleItem key={index} post={post} /> // Pass post to ArticleItem
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
