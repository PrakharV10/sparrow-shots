import React from 'react';
import { AvatarRegular } from '../Avatar/Avatar';
import { LikeBox, CommentBox } from '..';

const ProfilePiecesDisplay = ({ textPosts }) => {
	return (
		<div className="lg:ml-20 lg:mr-1">
			{textPosts.map((post) => {
				return (
					<div key={post.id} className="flex w-100 mb-4 shadow p-8">
						<AvatarRegular />
						<div className="ml-2.5 flex-1">
							<div className="font-regular text-sm text-gray-400 cursor-pointer">
								{post.user.name}
							</div>
							<p className="font-light cursor-pointer text-sm">{post.content}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProfilePiecesDisplay;
