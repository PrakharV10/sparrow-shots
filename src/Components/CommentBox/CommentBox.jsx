import React from 'react';
import { CommentIcon } from '../../Assets/svg';

const CommentBox = () => {
	return (
		<div className="flex items-center mr-2">
			<CommentIcon />
			<span className="text-sm">199</span>
		</div>
	);
};

export default CommentBox;
