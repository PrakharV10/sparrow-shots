import React from 'react';
import { useDispatch } from 'react-redux';
import { DownvoteIcon, UpvoteIcon } from '../../Assets/svg';
import { addReaction, deleteReaction, updateReaction } from '../../features/posts/postsSlice';
import { checkUserLikedOrDisliked } from '../../features/posts/utils';
import { useUserSelector } from '../../features/users/usersSlice';

const LikeBox = ({ post }) => {
	const { currentUser } = useUserSelector();
	const dispatch = useDispatch();

	function reactionButtonClicked(currentUserId, type, post) {
		if (checkUserLikedOrDisliked(post, currentUserId) === 0) {
			dispatch(addReaction({ post_id: post.id, user_id: currentUserId, type }));
		} else if (checkUserLikedOrDisliked(post, currentUserId) !== type) {
			dispatch(updateReaction({ post_id: post.id, user_id: currentUserId, type }));
		} else {
			dispatch(deleteReaction({ post_id: post.id, user_id: currentUserId }));
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
				className={
					checkUserLikedOrDisliked(post, currentUser.id) === 1 ? `text-pink-500` : ``
				}
				onClick={() => reactionButtonClicked(currentUser.id, 1, post)}
			>
				<UpvoteIcon />
			</span>
			<span className="text-sm mx-1">{calculateLikes(post)}</span>
			<span
				className={
					checkUserLikedOrDisliked(post, currentUser.id) === -1 ? `text-pink-500` : ``
				}
				onClick={() => reactionButtonClicked(currentUser.id, -1, post)}
			>
				<DownvoteIcon />
			</span>
		</div>
	);
};

export default LikeBox;
