import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
	DesktopHeader,
	FooterNav,
	LeftSidebar,
	MobileHeader,
	ProfileContainer,
} from '../../Components';
import { usePostSelector } from '../posts/postsSlice';
import { getProfileFromUserId } from './profileSlice';

const Profile = () => {
	const dispatch = useDispatch();
	const { userId } = useParams();
	const { profileUser, profileStatus } = useSelector((state) => state.profile);
	const { status } = usePostSelector();

	useEffect(() => {
		if (status === 'posts/fulfilled') dispatch(getProfileFromUserId({ user_id: userId }));
	}, [dispatch, userId, status]);

	return (
		<div>
			<nav className="sticky top-0 bg-blue-50 z-10 ">
				<MobileHeader />
				<DesktopHeader />
			</nav>
			<main className="min-h-full lg:w-11/12 lg:m-auto xl:w-4/5 relative">
				<LeftSidebar />
				{profileStatus === 'successfull' && <ProfileContainer profileUser={profileUser} />}
			</main>
			<footer>
				<FooterNav />
			</footer>
		</div>
	);
};

export default Profile;
