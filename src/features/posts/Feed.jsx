import React from 'react';
import {
	MobileHeader,
	DesktopHeader,
	LeftSidebar,
	FooterNav,
	FeedContainer,
	RightSuggestionBar,
} from '../../Components';
import { usePostSelector } from './postsSlice';

const Feed = () => {
	const { posts } = usePostSelector();
	return (
		<div>
			<nav className="sticky top-0 bg-blue-50 z-10 ">
				<MobileHeader />
				<DesktopHeader />
			</nav>
			<main className="lg:w-11/12 lg:m-auto xl:w-4/5 relative">
				<LeftSidebar />
				<FeedContainer posts={posts} />
				<RightSuggestionBar />
			</main>
			<footer>
				<FooterNav />
			</footer>
		</div>
	);
};

export default Feed;
