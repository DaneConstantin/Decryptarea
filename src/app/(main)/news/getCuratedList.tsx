import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { CURATED_NEWS } from "../../../../sanity/lib/queries";

async function getData() {
	const featured = await sanityFetch<SanityDocument[]>({
		query: CURATED_NEWS,
	});

	return featured;
}

export default async function CuratedNews() {
	const data = await getData();

	if (!data || data.length === 0) {
		console.log("No data found");
		return [];
	}

	// Extract titles from the data
	const titles = data.map((template: SanityDocument) => template.title);

	return titles;
}
