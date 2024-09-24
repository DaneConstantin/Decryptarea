// app/top-news/page.js (or a similar path based on your app directory structure)
import Link from 'next/link';
import { fetchRssFeed } from '../../utils/fetchRssFeed';
import ReadFullButton from '../../reusableComponents/homepageElements/ReadFullButton';
import Image from 'next/image';

// Helper function to format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options); // 'en-GB' gives day month year format
};

export default async function TopNews() {
    const url = 'https://bitcoinmagazine.com/.rss/full/';
    const posts = await fetchRssFeed(url);
    console.log(posts[0].content)
    return (
        <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/5 lg:px-6">
                {posts[0] && (
                    <div>
                        <Image className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" width={20} height={20} src={posts[0]['enclosure'][0].url[0] || 'https://via.placeholder.com/150'} alt={posts[0].title} />
                        <div>
                            <p className="mt-6 text-sm text-blue-500 uppercase my-4">Want to know</p>
                            <Link href={posts[0].link[0]} target='_blank' className="max-w-lg mt-4 text-2xl font-semibold leading-tight  hover:text-gray-500">
                                {posts[0].title}
                            </Link>

                            <p className="mt-5 text-medium leading-6 text-gray-700   dark:text-gray-400 ">{posts[0].description[0]}</p>
                            <div className="flex items-center mt-6">

                                <ReadFullButton link={posts[0].link[0]} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-8 lg:w-2/5 lg:mt-0">

                <div className="lg:px-6 border-[1px] border-gray-200 dark:border-[#ffffff1a] rounded-xl py-4 ">
                    <h4 className='mb-6 text-2xl font-bold'>The Latest</h4>

                    {posts.slice(1, 5).map((post, index) => (
                        <div key={index}>
                            <Link href={post.link[0]}><h3 className="text-lg capitalize hover:text-gray-500">{post.title}</h3>
                            </Link>
                            <p className="mt-2 line-clamp-2 font-medium text-gray-700  dark:text-gray-400">
                                {post.description}
                            </p>
                            <p className='my-2 text-xs opacity-[0.5]'> {formatDate(post.pubDate[0])}</p>
                            {index < 3 && <hr className="my-4 border-gray-200 dark:border-gray-700" />}
                        </div>
                    ))}

                </div>
                <div className="mt-6 lg:px-6 border-[1px] border-gray-200 dark:border-[#ffffff1a] rounded-xl py-4 ">
                    <h4 className='font-black text-center opacity-[0.3]'>Sponsor</h4>
                </div>
            </div>
        </div>
    );
};


