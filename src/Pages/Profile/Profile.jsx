import React from 'react';
import {
	DesktopHeader,
	FooterNav,
	LeftSidebar,
	MobileHeader,
	ProfileContainer,
} from '../../Components';

const Profile = () => {
	return (
		<div>
			<nav className="sticky top-0 bg-blue-50 z-10 ">
				<MobileHeader />
				<DesktopHeader />
			</nav>
			<main className="min-h-full lg:w-11/12 lg:m-auto xl:w-4/5 relative">
				<LeftSidebar />
				<ProfileContainer />
			</main>
			<footer>
				<FooterNav />
			</footer>
		</div>
	);
};

export default Profile;
