import React from 'react';
import {
	MobileHeader,
	DesktopHeader,
	LeftSidebar,
	FooterNav,
	FeedContainer,
	RightSuggestionBar,
} from '../../Components';

const Feed = () => {
	return (
		<div>
			<nav className="sticky top-0 bg-blue-50 z-10 ">
				<MobileHeader />
				<DesktopHeader />
			</nav>
			<main className="min-h-full lg:w-11/12 lg:m-auto xl:w-4/5 relative">
				<LeftSidebar />
				<FeedContainer />
				<RightSuggestionBar />
			</main>
			<footer>
				<FooterNav />
			</footer>
		</div>
	);
};

export default Feed;
