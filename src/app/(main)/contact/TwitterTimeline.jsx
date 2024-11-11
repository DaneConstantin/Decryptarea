'use client'
import Link from 'next/link';
import { useEffect } from 'react';

const TwitterTimeline = () => {
  useEffect(() => {
    // Check if Twitter script is already loaded
    if (window && window.twttr) {
      window.twttr.widgets.load();
    } else {
      // Create a script tag to load the Twitter widget
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Link
      className="twitter-timeline w-full"
      data-lang="en"
      data-dnt="true"
      data-theme="dark"
      data-tweet-limit="3"
      href="https://twitter.com/realDcoder"
    >
      Tweets by realDcoder
    </Link>
  );
};

export default TwitterTimeline;
