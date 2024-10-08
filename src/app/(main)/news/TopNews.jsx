import Link from 'next/link';
import ReadFullButton from '../../reusableComponents/homepageElements/NewsSection/ReadFullButton';
import Image from 'next/image';
import { fetchNewsWithSanity } from '../../utils/fetchSanity';
import DescriptionText from './DescriptionText';


// Helper function to format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options); // 'en-US' gives day month year format
};

export default async function TopNews() {
    const articles = await fetchNewsWithSanity();
    const sortedArticles = articles.sort((a, b) => {
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });

    return (
        <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/5 lg:px-6">
                {sortedArticles && (
                    <div>
                        <Image className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" width={20} height={20} src={sortedArticles[0].image || 'https://via.placeholder.com/150'} alt={sortedArticles.title} />
                        <div>
                            <p className="mt-6 text-sm text-blue-500 uppercase my-4">{sortedArticles[0].category}</p>
                            <Link href={sortedArticles[0].link} target='_blank' className="max-w-lg mt-4 text-2xl font-semibold leading-tight  hover:text-gray-300">
                                {sortedArticles[0].title}
                            </Link>

                            <DescriptionText article={sortedArticles[0]} />
                            <div className="flex items-center mt-6">

                                <ReadFullButton link={sortedArticles[0].link} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-8 lg:w-2/5 lg:mt-0">

                <div className="px-4 lg:px-6 border-[1px] border-gray-200 dark:border-[#ffffff1a] rounded-xl py-4 ">
                    <h3 className='mb-6 text-lg font-semibold'>Latest</h3>
                    { }
                    {sortedArticles.slice(1, 4).map((post, index) => (
                        <div key={post.link}>
                            <Link href={post.link}>
                                <h3 className="text-lg capitalize hover:text-gray-300">{post.title}</h3>
                            </Link>

                            <DescriptionText article={post} />

                            <p className='my-2 text-xs opacity-[0.5]'>{formatDate(post.pubDate)}</p>

                            {index < sortedArticles.slice(1, 4).length - 1 && (
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


