// home widget
'use client'
import Link from 'next/link';
import ReadFullButton from '../../reusableComponents/homepageElements/NewsSection/ReadFullButton';
import Image from 'next/image';
import useFetchArticles from '@/app/utils/useFetchArticles';

// Helper function to format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options); // 'en-US' gives day month year format
};

export default function TopNews() {
    const { articles, loading, error } = useFetchArticles();

    // Sort articles by publication date (latest first)
    const sortedArticles = articles.sort((a, b) => {
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });

    // Select only the first 4 articles
    const latestArticles = sortedArticles.slice(0, 4);

    if (loading) {
        return (<div className="lg:flex lg:-mx-6 animate-pulse">
            <div className="lg:w-3/5 lg:px-6">
                <div className="relative mt-4">
                    <div className="bg-gray-300 h-80 xl:h-[28rem] rounded-xl"></div>
                    <div className='mt-4'>
                        <div className="bg-gray-300 h-6 rounded-lg mb-2 w-3/4"></div>
                        <div className="bg-gray-300 h-4 rounded-lg mb-2 w-full"></div>
                        <div className="bg-gray-300 h-4 rounded-lg mb-2 w-1/2"></div>
                    </div>
                </div>
            </div>
            <div className="mt-8 lg:w-2/5 lg:mt-0">
                <div className="px-4 lg:px-6 border-[1px] border-gray-200 dark:border-[#ffffff1a] rounded-xl py-4 ">
                    <h3 className='mb-4 text-lg font-semibold bg-gray-300 h-6 rounded-lg w-1/2'></h3>
                    {Array.from({ length: 3 }, (_, index) => (
                        <div key={index} className='py-2'>
                            <div className="bg-gray-300 h-4 rounded-lg mb-2 w-full"></div>
                            <div className="bg-gray-300 h-4 rounded-lg mb-2 w-1/2"></div>
                            <div className='my-2 text-xs opacity-[0.5] bg-gray-300 h-4 rounded-lg w-1/4'></div>
                            {index < 2 && (
                                <hr className="my-2 border-gray-300 dark:border-gray-600" />
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-6 lg:px-6 border-[1px] border-gray-200 dark:border-[#ffffff1a] rounded-xl py-4 ">
                    <h4 className='font-black text-center opacity-[0.3]'>Sponsor</h4>
                </div>
            </div>
        </div>
        );
    }
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/5 lg:px-6">
                {latestArticles.length > 0 && (
                    <div>
                        <Link href={latestArticles[0].link}>
                            <Image
                                className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                                width={20}
                                height={20}
                                src={latestArticles[0].imageUrl || 'https://via.placeholder.com/150'}
                                alt={latestArticles[0].title}
                            />
                        </Link>
                        <div className='relative mt-4'>

                            <Link href={latestArticles[0].link} target='_blank' className="max-w-lg  text-2xl font-semibold leading-tight hover:text-gray-600">
                                {latestArticles[0].title}
                            </Link>
                            <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-700  dark:text-gray-400">
                                {latestArticles[0].content || "No content preview available"}
                            </p>
                            <div className="flex items-center mt-6">
                                <ReadFullButton link={latestArticles[0].link} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-8 lg:w-2/5 lg:mt-0">
                <div className="px-4 lg:px-6 border-[1px] border-gray-200 dark:border-[#ffffff1a] rounded-xl py-4 ">
                    <h3 className='mb-4 text-lg font-semibold'>Latest</h3>
                    {latestArticles.slice(1, 4).map((post, index) => (
                        <div key={post.link} className='py-2'>
                            <Link href={post.link}>
                                <h3 className="text-lg capitalize hover:text-gray-600">{post.title}</h3>
                            </Link>
                            <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-700  dark:text-gray-400">
                                {post.content || "No content preview available"}
                            </p>
                            <p className='my-2 text-xs opacity-[0.5]'>{formatDate(post.pubDate)}</p>

                            {index < latestArticles.slice(1, 4).length - 1 && (
                                <hr className="my-2 border-gray-300 dark:border-gray-600" />
                            )}
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
