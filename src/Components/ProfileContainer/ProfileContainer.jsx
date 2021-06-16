import React, { useState } from 'react';
import { ProfileHeader, ProfileShotsDisplay, ProfilePiecesDisplay } from '..';

const ProfileContainer = ({ profileUser }) => {
	const [postType, setPostType] = useState('pieces');

	return (
		<div className="px-5 mb-20 scroll-container lg:px-0 lg:ml-72 overflow-auto">
			<ProfileHeader profileUser={profileUser} />
			<div className="flex justify-center mb-4 text-sm">
				<span
					onClick={() => setPostType('shots')}
					className={`mr-2 cursor-pointer ${postType === 'shots' ? 'text-pink-500' : ''}`}
				>
					Shots
				</span>
				<span
					onClick={() => setPostType('pieces')}
					className={`ml-2 cursor-pointer ${
						postType === 'pieces' ? 'text-pink-500' : ''
					}`}
				>
					Pieces
				</span>
			</div>
			{postType === 'shots' ? (
				<ProfileShotsDisplay />
			) : (
				<ProfilePiecesDisplay textPosts={profileUser.text_posts} />
			)}
		</div>
	);
};

export default ProfileContainer;
