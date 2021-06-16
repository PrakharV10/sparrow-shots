import React from 'react';
import { AvatarRegular } from '../Avatar/Avatar';
import CommentBox from '../CommentBox/CommentBox';

const ProfilePiecesDisplay = ({ textPosts }) => {
	return (
		<div className="lg:ml-20 lg:mr-1">
			{textPosts.map((post) => {
				return (
					<div key={post.id} className="flex w-100 mb-4 lg:p-4 lg:shadow">
						<AvatarRegular />
						<div className="ml-2.5 flex-1">
							<div className="font-regular text-sm text-gray-400">
								{post.user.name}
							</div>
							<p className="font-light">{post.content}</p>
							<div>
								<CommentBox />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProfilePiecesDisplay;
