import React, { useState } from 'react';
import { AddIcon, LogOutIcon } from '../../Assets/svg';
import AddPostModal from '../AddPostModal/AddPostModal';
import LogoutModal from '../LogoutModal/LogoutModal';

const MobileHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<div className="w-screen h-14 flex justify-between items-center p-5 lg:hidden">
				<span onClick={() => setIsOpen(true)}>
					<AddIcon />
				</span>
				<div className="logo">
					Shots <span className="text-pink-500">Sparrow</span>
				</div>
				{/* <ChatIcon /> */}
				<div onClick={() => setIsModalOpen(true)}>
					<LogOutIcon />
				</div>
			</div>
			<AddPostModal isOpen={isOpen} setIsOpen={setIsOpen} />
			<LogoutModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</>
	);
};

export default MobileHeader;
