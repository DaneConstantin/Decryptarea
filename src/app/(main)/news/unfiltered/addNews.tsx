'use client';

import React, { useState } from 'react';

type Props = {
    articleObj: {
        title: string;
        content: string;
        author: string;
        date: string;
    }
};

export const addNews = ({ articleObj }: Props) => {
    const [article, setArticle] = useState(articleObj);  // Initialize with the passed article object
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const saveArticle = async () => {
        setError(null);
        setSuccessMessage(null);
        try {
            const response = await fetch('/api', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',  // Important to add headers
                },
                body: JSON.stringify(article),  // Send the article object to the server
            });

            if (!response.ok) {
                const message = `Error: ${response.status} - ${response.statusText}`;
                throw new Error(message);
            }

            const result = await response.json();
            setSuccessMessage("Article saved successfully!");
        } catch (err: any) {
            setError(err.message || "Something went wrong while saving the article.");
        }
    };

    return (
        <div>
            <h2>{article.title}</h2>
            <input 
                value={article.title} 
                onChange={(e) => setArticle({ ...article, title: e.target.value })} 
                placeholder="Article title"
            />
            <textarea 
                value={article.content} 
                onChange={(e) => setArticle({ ...article, content: e.target.value })} 
                placeholder="Article content"
            />
            <button onClick={saveArticle}>Send article to server</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
};
