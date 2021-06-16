import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { AvatarMedium, PostBottomDisclosure } from '..';
import { setCurrentPostClicked } from '../../features/posts/postsSlice';

const TextPostBox = ({ post }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function postClickHandler(e, post) {
		e.stopPropagation();
		dispatch(setCurrentPostClicked({ currentPost: post }));
	}

	function profileClickHandler(post) {
		navigate(`/profile/${post.user.id}`);
	}

	return (
		<div className="mb-6">
			<div onClick={() => profileClickHandler(post)} className="flex w-100 mb-4">
				<AvatarMedium name={post.user.name} />
				<div className="ml-2.5 flex-1">
					<div className="font-regular text-sm text-gray-400 cursor-pointer">
						{post.user.name}
					</div>
					<p
						onClick={(e) => postClickHandler(e, post)}
						className="font-light cursor-pointer"
					>
						{post.content}
					</p>
				</div>
			</div>
			<PostBottomDisclosure post={post} />
		</div>
	);
};

export default TextPostBox;
