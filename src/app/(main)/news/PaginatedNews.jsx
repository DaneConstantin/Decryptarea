// PaginatedNews.jsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import Pagination from '@/app/reusableComponents/Pagination';
import useFetchArticles from '@/app/utils/useFetchArticles';

const PaginatedNews = () => {
    const { articles, loading, error } = useFetchArticles();
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;

    // Calculate the articles to display on the current page
    const startIndex = (currentPage - 1) * articlesPerPage;
    const selectedArticles = articles.slice(startIndex, startIndex + articlesPerPage);

    // Helper function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        };

        return date.toLocaleDateString('en-US', options); // 'en-US' gives day month year format
    };

    if (loading) return <p>Loading articles...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {selectedArticles.map((article, index) => {
                    const image = article.imageUrl || "https://via.placeholder.com/550"; // Placeholder if no image

                    return (
                        <article key={index} className="flex max-w-xl flex-col items-start justify-start">
                            <div className="flex flex-wrap items-start pb-2 text-xs">
                                <time dateTime={article.pubDate} className="whitespace-nowrap my-2 text-xs opacity-[0.5]">
                                    {formatDate(article.pubDate)}
                                </time>
                            </div>
                            {image && (
                                <div className="relative w-full h-52">
                                    <Image
                                        src={image}
                                        alt={article.title}
                                        fill
                                        className="absolute inset-0 rounded-lg object-cover"
                                    />
                                </div>
                            )}
                            <div className="group relative">
                                <a href={article.link} target="_blank" rel="noopener noreferrer">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-400">
                                        <span className="absolute inset-0" />
                                        {article.title}
                                    </h3>
                                </a>

                                <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-700 hover:text-gray-500 dark:text-gray-400">
                                    {article.content || "No content preview available"}
                                </p>
                            </div>
                        </article>
                    );
                })}
            </div>
            <Pagination
                totalArticles={articles.length}
                articlesPerPage={articlesPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
};

export default PaginatedNews;
