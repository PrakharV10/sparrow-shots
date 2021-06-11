import React from 'react';
import { CommentOutline } from '../../Assets/svg';

const CommentBox = () => {
	return (
		<div className="flex items-center mr-2 cursor-pointer">
			<CommentOutline />
			<span className="text-sm">199</span>
		</div>
	);
};

export default CommentBox;
