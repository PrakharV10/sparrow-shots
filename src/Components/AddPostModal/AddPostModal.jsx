import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { createNewPiece, usePostSelector } from '../../features/posts/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddPostModal = ({ isOpen, setIsOpen }) => {
	function closeModal() {
		setPostInput('');
		setIsOpen(false);
	}

	const dispatch = useDispatch();
	const { userId } = useSelector((state) => state.auth);
	const { status } = usePostSelector();
	const [postInput, setPostInput] = useState('');

	async function publishPiece() {
		await dispatch(createNewPiece({ user_id: userId, content: postInput }));
		closeModal();
	}

	return (
		<div>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto bg-gray-400 bg-opacity-40"
					onClose={closeModal}
				>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0" />
						</Transition.Child>

						<span className="inline-block h-screen align-middle" aria-hidden="true">
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white-100 shadow-xl rounded-md">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-gray-800"
								>
									What's on your mind today?
								</Dialog.Title>
								<div className="mt-4">
									<textarea
										style={{ resize: 'none' }}
										className="h-32 w-full outline-none text-sm text-gray-600"
										placeholder="Write a piece!"
										value={postInput}
										onChange={(e) => setPostInput(e.target.value)}
									/>
								</div>

								<div className="mt-4 flex justify-end items-center">
									<button
										onClick={publishPiece}
										type="button"
										disabled={postInput.trim().length === 0 ? true : false}
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-pink-500 bg-pink-100 border border-transparent rounded-md hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
									>
										{status === 'posts/posting' ? `Publishing` : `Publish`}
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
};

export default AddPostModal;
