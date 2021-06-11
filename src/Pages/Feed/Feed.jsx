import React from 'react';
import { MobileHeader, DesktopHeader, LeftSidebar, FooterNav } from '../../Components';

const Feed = () => {
	return (
		<div>
			<nav>
				<MobileHeader />
				<DesktopHeader />
			</nav>
			<main className="md:w-4/5 md:m-auto relative">
				<LeftSidebar />
			</main>
			<footer>
				<FooterNav />
			</footer>
		</div>
	);
};

export default Feed;
