'use client'

import Image from "next/image";

import { stripHtmlTags } from "@/app/utils/stripHtmlTags";

// ArticleItem.tsx (Client Component)

type ArticleItemProps = {
    post: {
        title: string[];
        link: string[];
        'media:content': { url: string[]; }[];
        enclosure: { url: string[]; length: string[]; type: string[] }[];
        pubDate: string[];
        description: string[];
    };
};

const trimDescription = (description: string) => {
    const needsTrimming = description?.includes('</p>');
    // Strip HTML tags if the article is from CoinTelegraph
    const descriptionText = needsTrimming ? stripHtmlTags(description) : description;

    // Limit the description length to 135 characters
    return descriptionText.length > 175 ? descriptionText.substring(0, 175) : descriptionText;
};

const saveArticle = async (articleData: { title: string; link: string; imageUrl: string; pubDate: string; content: string }) => {
    console.log(articleData.content);
    try {
        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(articleData),
        });

        if (!response.ok) {
            throw new Error('Failed to save the article');
        }

        const result = await response.json();
        alert(result.message || 'Article saved successfully!');
    } catch (error) {
        console.error('Error saving article:', error);
        alert('Error saving article. Please try again.');
    }
};

const ArticleItem = ({ post }: ArticleItemProps) => {
    // Extract relevant data from the post object with safe access
    const title = post.title[0] || 'Untitled';
    const link = post.link[0] || '#'; // Fallback to a dummy link
    const imageUrl = post['media:content']?.[0]?.url?.[0] || post.enclosure?.[0]?.url?.[0] || ''; // Use media content or enclosure as fallback
    const pubDate = post.pubDate[0] || 'Unknown Date';
    const content = trimDescription(post.description[0] || 'No description available.');

    return (
        <li className="my-4">
            <article className="flex flex-col items-start justify-start">

                <h4 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h4>
                
               
                {content}

                <button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => saveArticle({ title, link, imageUrl, pubDate, content })}
                >
                    download
                </button>
            </article>
        </li>
    );
};

export default ArticleItem;
