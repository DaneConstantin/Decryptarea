import connect from '../utils/startMongo';
export const revalidate = 60
export async function GET() {
    try {
        const client = await connect;
        const cursor = client.db("CuratedNews").collection("News").find();
        const newsArticles = await cursor.toArray();

        // Process each article to convert Binary image data to base64
        const processedArticles = newsArticles.map(article => {
            if (article.imageUrl && article.imageUrl.buffer) {
                // Convert Binary buffer to base64 string
                const base64Image = article.imageUrl.buffer.toString('base64');
                return {
                    ...article,
                    imageUrl: `data:image/jpeg;base64,${base64Image}`
                };
            }
            return article;
        });

        return new Response(JSON.stringify(processedArticles), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching news articles:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
