import Link from 'next/link';
import ReadFullButton from '../../reusableComponents/homepageElements/ReadFullButton';
import Image from 'next/image';
import { fetchNewsWithSanity } from '../../utils/fetchSanity';
import DescriptionText from './DescriptionText';


// Helper function to format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options); // 'en-GB' gives day month year format
};

export default async function TopNews() {
    const articles = await fetchNewsWithSanity();
    return (
        <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/5 lg:px-6">
                {articles && (
                    <div>
                        <Image className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" width={20} height={20} src={articles[0].image || 'https://via.placeholder.com/150'} alt={articles.title} />
                        <div>
                            <p className="mt-6 text-sm text-blue-500 uppercase my-4">{articles[0].category}</p>
                            <Link href={articles[0].link} target='_blank' className="max-w-lg mt-4 text-2xl font-semibold leading-tight  hover:text-gray-300">
                                {articles[0].title}
                            </Link>

                            <p className="mt-5 text-medium leading-6 text-gray-700   dark:text-gray-400 ">{articles[0].description}</p>
                            <div className="flex items-center mt-6">

                                <ReadFullButton link={articles[0].link} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-8 lg:w-2/5 lg:mt-0">

                <div className="lg:px-6 border-[1px] border-gray-200 dark:border-[#ffffff1a] rounded-xl py-4 ">
                    <h4 className='mb-6 text-2xl font-bold'>The Latest</h4>

                    {articles.slice(1, 4).map((post, index) => (
                        <div key={post.link}>
                            <Link href={post.link}>
                                <h3 className="text-lg capitalize hover:text-gray-300">{post.title}</h3>
                            </Link>

                            <DescriptionText article={post} />

                            <p className='my-2 text-xs opacity-[0.5]'>{formatDate(post.pubDate)}</p>

                            {index < articles.slice(1, 4).length - 1 && (
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


