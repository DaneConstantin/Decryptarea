// utils/fetchRssFeed.js
import xml2js from 'xml2js';

export async function fetchRssFeed(url) {
    try {
        const response = await fetch(url); // Fetch the RSS feed
        const xml = await response.text(); // Convert response to text (XML format)

        // Parse the XML to JSON format
        const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
        return result.rss.channel[0].item; // Return the posts
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return []; // Return an empty array in case of error
    }
}
