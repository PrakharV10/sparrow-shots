import React from 'react';
import { AddIcon, ChatIcon } from '../../Assets/svg';

const MobileHeader = () => {
	return (
		<div className="w-screen h-14 flex justify-between items-center p-5 lg:hidden">
			<AddIcon />
			<div className="logo">
				Shots <span className="text-pink-500">Sparrow</span>
			</div>
			<ChatIcon />
		</div>
	);
};

export default MobileHeader;
