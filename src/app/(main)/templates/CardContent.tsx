import React from 'react';
import PreviewButton from '../../reusableComponents/homepageElements/TemplateSection/PreviewButton';
import DownloadButton from '../../reusableComponents/homepageElements/TemplateSection/DownloadButton';
import CardImage from './CardImage';
import { SanityDocument } from 'next-sanity';

export default function CardContent({ propu }: { propu: SanityDocument }) {
    const { title, mainImage, description, buyLink, slug } = propu || {};

    return (
        <div className='flex flex-col gap-4 max-w-xs md:max-w-md'>
            <div className="w-full mx-auto h-auto rounded-xl shadow cursor-pointer bg-white bg-gradient-to-b dark:from-[#131415] dark:to-[#050505] border border-[#ffffff1a] hover:border-[#ffffff33] hover:shadow-md">
                {mainImage && slug ? (
                    <CardImage previewImg={mainImage} slug={slug.current} />
                ) : (
                    <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                        <span>No Image Available</span>
                    </div>
                )}
            </div>

            <div className="flex-col">
                <h3 className="text-sm font-medium">
                    <span>{title || 'No Title'}</span>
                </h3>
                <p className="text-sm text-[#999] truncate">
                    {description || 'No description available'}
                </p>
            </div>

            <div className="flex justify-center">
                {slug ? (
                    <PreviewButton link={`/templates/${slug.current}/preview`} />
                ) : (
                    <button disabled className="btn btn-disabled">Preview Unavailable</button>
                )}
                {buyLink ? (
                    <DownloadButton link={buyLink} />
                ) : (
                    <button disabled className="btn btn-disabled">Download Unavailable</button>
                )}
            </div>
        </div>
    );
}
