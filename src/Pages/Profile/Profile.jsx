import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
	DesktopHeader,
	FooterNav,
	LeftSidebar,
	MobileHeader,
	ProfileContainer,
} from '../../Components';
import { getProfileFromUserId, useUserSelector } from '../../features/users/usersSlice';

const Profile = () => {
	const dispatch = useDispatch();
	const { userId } = useParams();
	const { profileUser, status } = useUserSelector();

	useEffect(() => {
		dispatch(getProfileFromUserId({ user_id: userId }));
	}, [dispatch, userId]);

	return (
		<div>
			<nav className="sticky top-0 bg-blue-50 z-10 ">
				<MobileHeader />
				<DesktopHeader />
			</nav>
			<main className="min-h-full lg:w-11/12 lg:m-auto xl:w-4/5 relative">
				<LeftSidebar />
				{status === 'successfull' && <ProfileContainer profileUser={profileUser} />}
			</main>
			<footer>
				<FooterNav />
			</footer>
		</div>
	);
};

export default Profile;
