import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	MobileHeader,
	DesktopHeader,
	LeftSidebar,
	FooterNav,
	FeedContainer,
	RightSuggestionBar,
} from '../../Components';
import { loadPosts, usePostSelector } from './postsSlice';

const Feed = () => {
	const { status, posts } = usePostSelector();
	const dispatch = useDispatch();

	useEffect(() => {
		if (status === 'idle') dispatch(loadPosts());
	}, [status, dispatch]);

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
