import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../features/Auth/authSlice';

const LogoutModal = ({ isModalOpen, setIsModalOpen }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	function closeModal() {
		setIsModalOpen(false);
	}

	function logOutHandler() {
		dispatch(logOutUser());
		navigate('/login');
	}

	return (
		<div>
			<Transition appear show={isModalOpen} as={Fragment}>
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
							<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white-100 shadow-xl rounded-md">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-gray-900"
								>
									Logout
								</Dialog.Title>
								<div className="mt-2">
									<p className="text-md text-gray-500">
										Are you sure you want to Logout? We will be waiting for your
										comeback :)
									</p>
								</div>

								<div className="mt-4 flex justify-between items-center">
									<button
										onClick={logOutHandler}
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
									>
										Log Out
									</button>
									<button
										type="button"
										onClick={closeModal}
										className="px-4 py-2 text-blue-100 bg-blue-700 text-sm font-medium border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
									>
										Cancel
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

export default LogoutModal;
