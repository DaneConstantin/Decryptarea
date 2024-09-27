import TemplatePageHero from './PageHero';
import Filter from './Filter';
import { SanityDocument } from "next-sanity"

import { sanityFetch } from "../../../../sanity/lib/fetch"
import { ALLPRODUCTS_QUERY } from "../../../../sanity/lib/queries"

export default async function Templates() {

	const templateProducts = await sanityFetch<SanityDocument[]>({
		query: ALLPRODUCTS_QUERY,
	})
	return (
		<>
			<TemplatePageHero />
			<section className="relative border-y-[1px] border-gray-200 dark:border-[#ffffff1a]" >

				<Filter products={templateProducts} />

			</section>

		</>
	);
};


