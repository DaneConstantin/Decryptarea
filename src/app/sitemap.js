import { sanityFetch } from '../../sanity/lib/fetch';
import { ALLGUIDES_QUERY, ALLPRODUCTS_QUERY } from '../../sanity/lib/queries';


export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const products = await sanityFetch({
    query: ALLPRODUCTS_QUERY,
  });
  const templateList = products.map((item) => ({
    url: `${baseUrl}/templates/${item.slug.current}`,
    lastModified: new Date(item._updatedAt),
    changeFrequency: 'daily',
    priority: 1,
  }))


  //guides
  const guides = await sanityFetch({
    query: ALLGUIDES_QUERY,

  })
  const guidesList = guides.map((item) => ({
    url: `${baseUrl}/guides/${item.slug.current}`,
    lastModified: new Date(item._updatedAt),
    changeFrequency: 'daily',
    priority: 1,
  }))

  return [
    {
      url: 'https://www.decryptarea.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.decryptarea.com/templates',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.decryptarea.com/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.decryptarea.com/guides',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.decryptarea.com/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.decryptarea.com/news',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...templateList,
    ...guidesList
  ];
}