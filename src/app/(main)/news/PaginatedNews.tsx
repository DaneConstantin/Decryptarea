// PaginatedNews.jsx
'use client'
import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import DescriptionText from './DescriptionText'; // Import DescriptionText if needed
import Image from 'next/image'; // Import the Image component from Next.js
import Pagination from '@/app/reusableComponents/Pagination';

interface PaginatedNewsProps {
    matchingArticles: {
        creator: string;
        title: string;
        link: string;
        pubDate: string;
        category: string;
        description: string;
        image: string;
    }[];
}
// Helper function to format date
const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    };

    return date.toLocaleDateString('en-US', options); // 'en-US' gives day month year format
};


const PaginatedNews: React.FC<PaginatedNewsProps> = ({ matchingArticles }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('');
    const articlesPerPage = 6;

    const categories = Array.from(new Set(matchingArticles.map(article => article.category)));

    // Filter articles based on selected category
    const filteredArticles = selectedCategory
        ? matchingArticles.filter(article => article.category === selectedCategory)
        : matchingArticles;

    // Sort the articles by publication date before pagination
    const sortedArticles = filteredArticles.sort((a, b) => {
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });
    // Calculate the articles to display on the current page
    const startIndex = (currentPage - 1) * articlesPerPage;
    const selectedArticles = sortedArticles.slice(startIndex, startIndex + articlesPerPage);
    return (
        <>
            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {selectedArticles.map((article, index) => {
                    const imageUrl = article.image ? article.image : "https://via.placeholder.com/550";


                    return (
                        <article key={index} className="flex max-w-xl flex-col items-start justify-start">
                            <div className="flex flex-wrap items-start pb-2 text-xs">
                                <time dateTime={article.pubDate} className="whitespace-nowrap my-2 text-xs opacity-[0.5]">
                                    {formatDate(article.pubDate)}
                                </time>
                            </div>
                            {imageUrl && (
                                <div className="relative w-full h-52">
                                    <Image
                                        src={imageUrl}
                                        alt={article.title}
                                        fill
                                        objectFit="cover"
                                        className="absolute inset-0 rounded-lg"
                                    />
                                </div>
                            )}
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-300">
                                    <a href={article.link}>
                                        <span className="absolute inset-0" />
                                        {article.title}
                                    </a>
                                </h3>
                                <DescriptionText article={article} />
                            </div>
                            <div className="relative mt-4 flex items-center gap-x-4">
                                <div className="text-sm leading-6">
                                    <p className="font-semibold">
                                        <a href={article.creator}>
                                            <span className="absolute inset-0" />
                                            {article.creator ? article.creator : 'Unknown'}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
            <Pagination
                totalArticles={filteredArticles.length}
                articlesPerPage={articlesPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
};

export default PaginatedNews;
