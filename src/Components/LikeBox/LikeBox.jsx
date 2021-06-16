import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DownvoteIcon, UpvoteIcon } from '../../Assets/svg';
import { addReaction, deleteReaction, updateReaction } from '../../features/posts/postsSlice';
import { checkUserLikedOrDisliked } from '../../features/posts/utils';

const LikeBox = ({ post }) => {
	const { userId } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	function reactionButtonClicked(userId, type, post) {
		if (checkUserLikedOrDisliked(post, userId) === 0) {
			dispatch(addReaction({ post_id: post.id, user_id: userId, type }));
		} else if (checkUserLikedOrDisliked(post, userId) !== type) {
			dispatch(updateReaction({ post_id: post.id, user_id: userId, type }));
		} else {
			dispatch(deleteReaction({ post_id: post.id, user_id: userId }));
		}
	}

	function calculateLikes(post) {
		return post.likes.reduce((acc, likeObj) => {
			return acc + likeObj.type;
		}, 0);
	}

	return (
		<div className="flex">
			<span
				className={checkUserLikedOrDisliked(post, userId) === 1 ? `text-pink-500` : ``}
				onClick={() => reactionButtonClicked(userId, 1, post)}
			>
				<UpvoteIcon />
			</span>
			<span className="text-sm mx-1">{calculateLikes(post)}</span>
			<span
				className={checkUserLikedOrDisliked(post, userId) === -1 ? `text-pink-500` : ``}
				onClick={() => reactionButtonClicked(userId, -1, post)}
			>
				<DownvoteIcon />
			</span>
		</div>
	);
};

export default LikeBox;
