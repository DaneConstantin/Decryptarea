// NOTE: This scroll to top is the actual working scroll to to when user clicks on the circle arrow that appears when use scrolls down.
// The other `ScrollToTop` component in components folder is for the default react scroll to top behavior on route visit.
'use client'
import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const useScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			// if the user scrolls down, show the button
			window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
		}
		// listen for scroll events
		window.addEventListener("scroll", toggleVisibility)

		// clear the listener on component unmount
		return () => {
			window.removeEventListener("scroll", toggleVisibility)
		}
	}, [])

	// handles the animation when scrolling to the top
	const scrollToTop = () => {
		isVisible &&
			window.scrollTo({
				top: 0,
				behavior: "auto",
			})
	}


	return (
		<>
			<FiChevronUp
				className="scrollToTop bg-black text-[#f0f0f0] dark:bg-[#f0f0f0] dark:text-black"
				onClick={scrollToTop}
				style={{
					position: 'fixed',

					cursor: 'pointer',
					boxShadow: '0 0 10px rgba(0, 0,0, 0.09)',
					height: 45,
					width: 45,
					borderRadius: 50,
					right: 50,
					bottom: 50,
					display: isVisible ? 'flex' : 'none',
					padding: 5,
					zIndex: 100
				}}
			/>
		</>
	);
};

export default useScrollToTop;
