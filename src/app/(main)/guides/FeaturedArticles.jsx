import React from 'react';
import Link from 'next/link';
import StaticCardImage from './StaticCardImage';

// Helper function to format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options); // 'en-US' gives day month year format
};

export default function FeaturedArticle({ propu }) {
    const { title, mainImage, _updatedAt, slug } = propu || {};

    return (
        <div className='flex flex-col gap-4 max-w-xs md:max-w-md'>
            <Link href={`/guides/${slug.current}`}>

                <div className="w-full mx-auto h-auto rounded-xl shadow cursor-pointer bg-white bg-gradient-to-b dark:from-[#131415] dark:to-[#050505] border border-[#ffffff1a] hover:border-[#ffffff33] hover:shadow-md">
                    {mainImage && slug ? (
                        <StaticCardImage previewImg={mainImage} />
                    ) : (
                        <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                            <span>No Image Available</span>
                        </div>
                    )}
                    <div className="flex-col px-5 py-4">
                        <h3 className="text-lg font-medium">
                            <span>{title || 'No Title'}</span>
                        </h3>
                        <p className="text-sm text-[#999] truncate">
                            Last Updated {formatDate(_updatedAt) || 'No Recent Update'}
                        </p>
                    </div>
                </div>
            </Link>


            <div className="flex justify-center">

            </div>
        </div>
    );
}
