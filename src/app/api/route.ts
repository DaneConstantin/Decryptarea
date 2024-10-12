import connect from '../utils/startMongo';
import { ObjectId } from 'mongodb';
import sharp from 'sharp';


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

export async function POST(request: Request) {
    try {
        const client = await connect;
        const body = await request.json();

        const { title, content, link, pubDate, imageUrl } = body;

        // Fetch the image from the URL
        const imageResponse = await fetch(imageUrl);

        const imageBuffer = await imageResponse.arrayBuffer();

        // Compress the image
        const compressedImageBuffer = await sharp(Buffer.from(imageBuffer))
            .resize({ width: 821 }) // Resize image to a max width of 384px
            .jpeg({ quality: 60 }) // Compress image to 50% quality
            .toBuffer();

        // Insert the document with the compressed image as a Buffer
        const result = await client.db("CuratedNews").collection("News").insertOne({
            title,
            content,
            link,
            pubDate,
            imageUrl: compressedImageBuffer, // Store as Buffer
        });

        return new Response(JSON.stringify({ message: "Article added successfully", result }), { status: 201 });
    } catch (error) {
        console.error("Error in POST function:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const client = await connect;
        const body = await request.json();
        const id = ObjectId.createFromHexString(body.id);

        // Update the document in MongoDB
        const result = await client.db("CuratedNews").collection("News").updateOne(
            { _id: id },
            { $set: { greeting: body.greeting } }
        );

        return new Response(JSON.stringify({ message: "Successfully updated the document", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
}
