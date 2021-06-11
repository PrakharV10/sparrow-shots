import React from 'react';
import { AvatarMedium, CommentBox, SaveBox, LikeBox } from '..';

const ImagePostBox = () => {
	return (
		<div className="mb-6">
			<div className="flex w-100 mb-4">
				<AvatarMedium />
				<div className="ml-2.5 flex-1">
					<div className="font-regular text-sm text-gray-400 cursor-pointer">
						Sakshi Jain
					</div>
					<img
						className="rounded-md mt-2"
						src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
						alt="sq-post"
					/>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex">
					<CommentBox />
					<SaveBox />
				</div>
				<div>
					<LikeBox />
				</div>
			</div>
		</div>
	);
};

export default ImagePostBox;
