import './../globals.css';
import { Inter } from 'next/font/google';
import UseScrollToTop from '../hooks/UseScroll';
import AppHeader from '../reusableComponents/header/AppHeader';
import Footer from '../reusableComponents/footer/Footer';

const inter = Inter({ subsets: ['latin'] });
export const viewport = {
  themeColor: '#000',
}

export const metadata = {
  title: 'Decryptarea - Web3 Templates, dApps, NFTs, News, & Consulting Services',
  description: 'Decryptarea is your all-in-one Web3 platform offering cutting-edge templates for dApps and NFTs, insightful blogs, a comprehensive Web3 news aggregator, and expert consulting services. Empower your blockchain projects with the tools and guidance you need to thrive in the decentralized future.',
  keywords: 'Web3 Templates, dApps, NFTs, News, & Consulting Services',
  icons: {
    icon: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', url: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    ],
    apple: [
      { rel: 'apple-touch-icon', sizes: '57x57', url: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', url: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', url: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', url: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', url: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', url: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', url: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', url: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-icon-180x180.png' },
    ],
    android: { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/android-icon-192x192.png' },
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/ms-icon-144x144.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-screen bg-[#f9f9f9] dark:text-[#f0f0f0] dark:bg-primary-dark transition duration-300 flex flex-col ${inter.className}`}
        id="root"
      >
        <AppHeader />

        {children}

        <Footer />
        <UseScrollToTop />
      </body>
    </html>
  );
}
