'use client'
import { stripHtmlTags } from '../../utils/stripHtmlTags';

const DescriptionText = ({ article }) => {
    const isFromCoinTelegraph = article.description?.includes('<p>');

    // Strip HTML tags if the article is from CoinTelegraph
    const descriptionText = isFromCoinTelegraph ? stripHtmlTags(article.description) : article.description;

    return (
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-700 hover:text-gray-500 dark:text-gray-400">
            {descriptionText}
        </p>
    );
};

export default DescriptionText;
