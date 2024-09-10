// app/top-news/page.js (or a similar path based on your app directory structure)
import Link from 'next/link';
import { fetchRssFeed } from '../../utils/fetchRssFeed';

const TopNews = async () => {
    const url = 'https://bitcoinmagazine.com/.rss/full/';
    const posts = await fetchRssFeed(url);
    console.log(posts[0].content)
    return (
        <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/5 lg:px-6">
                {posts[0] && (
                    <div>
                        <img className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src={posts[0]['enclosure'][0].url[0] || 'https://via.placeholder.com/150'} alt={posts[0].title} />
                        <div>
                            <p className="mt-6 text-sm text-blue-500 uppercase my-4">Want to know</p>
                            <Link href={posts[0].link[0]} target='_blank' className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                                {posts[0].title}
                            </Link>

                            <p className="mt-5 text-medium leading-6 text-gray-700  hover:text-gray-500 dark:text-gray-400 ">{posts[0].description[0]}</p>
                            <div className="flex items-center mt-6">

                                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="Author" />
                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia Anderson</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-8 lg:w-2/5 lg:mt-0 lg:px-6">
                {posts.slice(1, 5).map((post, index) => (
                    <div key={index}>
                        <Link href={post.link[0]}><h3 className="text-lg capitalize">{post.title}</h3>
                        </Link>
                        <p className="block mt-2 line-clamp-3 font-medium text-gray-700 hover:text-gray-500 dark:text-gray-400">
                            {post.description}
                        </p>
                        {index < 3 && <hr className="my-6 border-gray-200 dark:border-gray-700" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopNews;
