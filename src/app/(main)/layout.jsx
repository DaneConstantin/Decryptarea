import './../globals.css';
import { Inter } from 'next/font/google';
import UseScrollToTop from '../hooks/UseScroll';
import AppHeader from '../reusableComponents/header/AppHeader';
import Footer from '../reusableComponents/footer/Footer';
import Head from 'next/head';
//import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Decryptarea - Web3 Templates, dApps, NFTs, News, & Consulting Services',
  description: 'Decryptarea is your all-in-one Web3 platform offering cutting-edge templates for dApps and NFTs, insightful blogs, a comprehensive Web3 news aggregator, and expert consulting services. Empower your blockchain projects with the tools and guidance you need to thrive in the decentralized future.',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#000" />
        <meta name="description" content="Decryptarea is your all-in-one Web3 platform offering cutting-edge templates for dApps and NFTs, insightful blogs, a comprehensive Web3 news aggregator, and expert consulting services. Empower your blockchain projects with the tools and guidance you need to thrive in the decentralized future." />
        <meta name="keywords" content="Web3 Templates, dApps, NFTs, News, & Consulting Services" />
        <title>Web3 Templates, dApps, NFTs, News, & Consulting Services</title>
        
      </Head>
      <body className={`min-h-screen bg-[#f9f9f9] dark:text-[#f0f0f0] dark:bg-primary-dark transition duration-300 flex flex-col ${inter.className}`} id="root" >
        <AppHeader />

        {children}

        <Footer />
        <UseScrollToTop />
        {/* <SpeedInsights /> */}
      </body>
    </html >
  )
}
