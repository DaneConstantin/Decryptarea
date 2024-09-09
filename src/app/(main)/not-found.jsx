'use client'
import Container from "../reusableComponents/Container";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const NotFound = () => {
	const router = useRouter();
	return (

		<Container className="flex h-full justify-center">
			<section className="flex flex-col items-center justify-center pt-18">
				<div className="max-w-6xl py-14 mx-10 mt-auto">

					<p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
					<h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-[#f0f0f0] md:text-3xl">We can&apos;t find that page</h1>
					<p className="mt-4 text-[#999] dark:text-gray-400">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>

					<div className="flex items-center mt-6 gap-x-3">
						<button onClick={() => router.back()} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-primary-dark hover:bg-gray-100 dark:text-gray-200 dark:border-[#ffffff1a]">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
							</svg>

							<span>Go Back</span>
						</button>

						<button className="w-1/2 px-5 py-2 text-sm tracking-wide text-[#f0f0f0] transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
							<Link href='/'>Take me home</Link>
						</button>
					</div>

				</div>
			</section>
		</Container>
	);
};

export default NotFound;