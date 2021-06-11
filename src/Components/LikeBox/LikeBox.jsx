import React from 'react';
import { DownvoteIcon, UpvoteIcon } from '../../Assets/svg';

const LikeBox = () => {
	return (
		<div className="flex">
			<UpvoteIcon />
			<span className="text-sm mx-1">200</span>
			<DownvoteIcon />
		</div>
	);
};

export default LikeBox;
