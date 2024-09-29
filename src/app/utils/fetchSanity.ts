import { fetchRssFeed } from './fetchRssFeed'; // Import the fetch function
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../../sanity/lib/fetch";
import { CURATED_NEWS } from "../../../sanity/lib/queries";

interface RssPost {
  author?: string[];
  'dc:creator'?: string[];
  'media:content': { url: string[] }[];
  description: string[];
  pubDate: string[];
  title: string[];
  link: string[];
}

interface Article {
  title: string;
  link: string;
  pubDate: string;
  category: string;
  description: string;
  image: string;
  creator: string;
}

async function getSanityTitles() {
  const featured = await sanityFetch<SanityDocument[]>({
    query: CURATED_NEWS,
  });

  if (!featured || featured.length === 0) {
    return [];
  }

  // Extract titles and categories
  return featured.map((article: SanityDocument) => ({
    link: article.link,
    personalCategory: article.category,
  }));
}

export async function fetchNewsWithSanity() {
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
  ];

  // Fetch all RSS posts concurrently
  const rssPostsArray = await Promise.all(urls.map(url => fetchRssFeed(url)));

  // Flatten the array of posts
  const rssPosts: RssPost[] = rssPostsArray.flat();

  // Fetch Sanity titles
  const sanityTitles = await getSanityTitles();

  // Create a Set of Sanity links for quick lookup
  const sanityLinksSet = new Set(sanityTitles.map(title => title.link));

  // Create a new array of articles enriched with categories
  const matchingArticles: Article[] = rssPosts
    .filter((post: RssPost) => sanityLinksSet.has(post.link[0])) // Filter based on Sanity links
    .map((post: RssPost) => {
      // Find the matching Sanity title
      const matchedTitle = sanityTitles.find((title) => title.link === post.link[0]);

      // Construct the article object
      const article: Article = {
        title: post.title[0], // Assuming title is an array
        link: post.link[0],
        pubDate: post.pubDate[0],
        category: matchedTitle ? matchedTitle.personalCategory : null, // Assign category if match found
        description: post.description[0], // Assuming description is also an array
        image: post['media:content'] && post['media:content'][0].url[0],
        creator: post['dc:creator'] ? post['dc:creator'][0] : post.author ? post.author[0] : 'Unknown Author', // Extract creator if available
      };

      return article;
    });

  return matchingArticles;
}
