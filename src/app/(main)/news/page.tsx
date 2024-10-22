
import PaginatedNews from './PaginatedNews'; // Import the PaginatedNews component

export default async function News() {


  return (
    <section className="container mx-auto px-4 py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest Curated News</h1>

        <PaginatedNews />

      </div>
    </section>
  );
}