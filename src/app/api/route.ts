import connect from '../utils/startMongo';
import { ObjectId } from 'mongodb';

export async function GET(request: Request) {
    try {
        const client = await connect;
        const cursor = await client.db("CuratedNews").collection("News").find();
        const newsArticles = await cursor.toArray();
        return new Response(JSON.stringify(newsArticles), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const client = await connect;
        const body = await request.json();

        const { title, content, link, pubDate, imageUrl } = body; // Add imageUrl to destructure

        const result = await client.db("CuratedNews").collection("News").insertOne({
            title,
            content,
            link,
            pubDate,
            imageUrl, // Save imageUrl to MongoDB
        });

        return new Response(JSON.stringify({ message: "Article added successfully", result }), { status: 201 });
    } catch (error) {
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
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
