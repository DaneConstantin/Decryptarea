// News.jsx
import { fetchRssFeed } from '../../utils/fetchRssFeed'; // Import the fetch function
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { CURATED_NEWS } from "../../../../sanity/lib/queries";
import PaginatedNews from './PaginatedNews'; // Import the PaginatedNews component

async function getSanityTitles() {
  const featured = await sanityFetch<SanityDocument[]>({
    query: CURATED_NEWS,
  });

  if (!featured || featured.length === 0) {
    return [];
  }

  // Extract titles
  return featured.map((article: SanityDocument) => ({
    link: article.link,
    personalCategory: article.category,
  }));
}

export default async function News() {
  const urls = [
    'https://bitcoinmagazine.com/.rss/full/',
    'https://cointelegraph.com/rss/tag/blockchain',
    'https://www.coindesk.com/arc/outboundfeeds/rss/',
  ];

  // Fetch all RSS posts concurrently
  const rssPostsArray = await Promise.all(urls.map(url => fetchRssFeed(url)));

  // Flatten the array of posts
  const rssPosts = rssPostsArray.flat();
  // Fetch Sanity titles
  const sanityTitles = await getSanityTitles();

  // Create a Set of Sanity links for quick lookup
  const sanityLinksSet = new Set(sanityTitles.map(title => title.link));

  // Create a new array of articles enriched with categories
  const matchingArticles = rssPosts
    .filter((post: { link: any[] }) => sanityLinksSet.has(post.link[0])) // Filter based on Sanity links
    .map((post: {
      author?: any;
      'dc:creator'? : any[];
      'media:content' : any[];
      description: any;
      pubDate: any;
      title: any; link: any[]
    }) => {
      // Find the matching Sanity title
      const matchedTitle = sanityTitles.find((title) => title.link === post.link[0]);

      // Construct the article object
      const article = {
        title: post.title[0], // Assuming title is an array
        link: post.link[0],
        pubDate: post.pubDate[0],
        category: matchedTitle ? matchedTitle.personalCategory : null, // Assign category if match found
        // Add any other properties you want to include from the RSS feed
        description: post.description[0], // Assuming description is also an array
        image: post['media:content'] && post['media:content'][0] ? post['media:content'][0].url[0] : null,
        creator: post['dc:creator'] ? post['dc:creator'][0] : post.author ? post.author[0] : 'Unknown Author', // Extract creator if available

      };

      return article;
    });
  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest Curated News</h1>
        {matchingArticles.length > 0 ? (
          <PaginatedNews matchingArticles={matchingArticles} />
        ) : (
          <p>No matching articles found.</p>
        )}
      </div>
    </div>
  );
}

export const revalidate = 0;
