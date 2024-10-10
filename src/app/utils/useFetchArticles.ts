// useFetchArticles.ts
import { useEffect, useState } from 'react';

const useFetchArticles = () => {
    const [articles, setArticles] = useState<any[]>([]); // Adjust the type based on your article structure
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchArticles = async () => {
        try {
            const response = await fetch('/api'); // Adjust this path as necessary for your API route
            if (!response.ok) {
                throw new Error('Failed to fetch articles');
            }
            const data = await response.json();
            setArticles(data);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return { articles, loading, error };
};

export default useFetchArticles;
