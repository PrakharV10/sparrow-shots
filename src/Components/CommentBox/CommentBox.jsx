import React from 'react';
import { CommentOutline } from '../../Assets/svg';

const CommentBox = ({ commentNumber }) => {
	return (
		<div className="flex items-center mr-2 cursor-pointer">
			<CommentOutline />
			<span className="text-sm">{commentNumber}</span>
		</div>
	);
};

export default CommentBox;
