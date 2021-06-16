import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import CommentBox from '../CommentBox/CommentBox';
import LikeBox from '../LikeBox/LikeBox';
import SaveBox from '../SaveBox/SaveBox';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../features/posts/postsSlice';

const CommentDisclosure = ({ post }) => {
	const [commentInput, setCommentInput] = useState('');
	const dispatch = useDispatch();
	const { userId } = useSelector((state) => state.auth);

	async function commentPostHandler() {
		if (commentInput.trim().length !== 0) {
			await dispatch(
				addComment({ user_id: userId, post_id: post.id, comment: commentInput })
			);
			setCommentInput('');
		}
	}

	return (
		<div>
			<Disclosure>
				{({ open }) => (
					<>
						<div className={`flex justify-between items-center `}>
							<div className="flex">
								<Disclosure.Button className="focus:outline-none">
									<span>
										<CommentBox commentNumber={post.comments.length} />
									</span>
								</Disclosure.Button>
								<SaveBox post={post} />
							</div>
							<div>
								<LikeBox post={post} />
							</div>
						</div>

						<Disclosure.Panel className="mt-2 pt-4 pb-2 mb-6 text-sm rounded-sm border-b-2 border-gray-300">
							{post.comments.length !== 0 && (
								<>
									{post.comments.map((one) => {
										return (
											<div className="flex" key={one.id}>
												<span className="text-gray-500 font-semibold">
													{one.user.name}
												</span>
												<span className="ml-4">{one.comment}</span>
											</div>
										);
									})}
								</>
							)}
							{post.comments.length === 0 && (
								<div className="text-center text-gray-500 font-medium text-base">
									Be the first one to Comment!!
								</div>
							)}
							<div className="w-full flex items-center mt-2 rounded-md">
								<input
									value={commentInput}
									onChange={(e) => setCommentInput(e.target.value)}
									className="w-full h-8 outline-none bg-transparent"
									placeholder="Comment.."
								/>
								<button
									onClick={commentPostHandler}
									className="outline-none border-none h-8 text-pink-500 focus:outline-none"
								>
									Post
								</button>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};

export default CommentDisclosure;
