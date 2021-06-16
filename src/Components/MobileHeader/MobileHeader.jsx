import React, { useState } from 'react';
import { AddIcon, ChatIcon } from '../../Assets/svg';
import AddPostModal from '../AddPostModal/AddPostModal';

const MobileHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="w-screen h-14 flex justify-between items-center p-5 lg:hidden">
				<span onClick={() => setIsOpen(true)}>
					<AddIcon />
				</span>
				<div className="logo">
					Shots <span className="text-pink-500">Sparrow</span>
				</div>
				<ChatIcon />
			</div>
			<AddPostModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
};

export default MobileHeader;
