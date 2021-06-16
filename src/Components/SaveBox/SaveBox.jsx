import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SavePostIcon } from '../../Assets/svg';
import { addToSaved, deleteFromSaved } from '../../features/posts/postsSlice';
import { checkUserSaved } from '../../features/posts/utils';

const SaveBox = ({ post }) => {
	const { userId } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	function toggleSavePost() {
		if (!checkUserSaved(post, userId)) {
			dispatch(addToSaved({ user_id: userId, post_id: post.id }));
		} else {
			dispatch(deleteFromSaved({ user_id: userId, post_id: post.id }));
		}
	}

	return (
		<div
			className={`flex items-center cursor-pointer fill-current ${
				checkUserSaved(post, userId) ? `text-pink-500` : ``
			}`}
			onClick={toggleSavePost}
		>
			<SavePostIcon />
			<span className="text-sm">{checkUserSaved(post, userId) ? `Saved` : `Save`}</span>
		</div>
	);
};

export default SaveBox;
