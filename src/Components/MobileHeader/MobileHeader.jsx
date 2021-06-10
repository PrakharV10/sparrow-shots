import React from 'react';
import { Add } from '../../Assets/svg/Add';
import { Chats } from '../../Assets/svg/Chats';

const MobileHeader = () => {
	return (
		<div className="w-screen h-14 flex justify-between items-center p-5 md:hidden">
			<Add />
			<div className="logo">
				Shots <span className="text-pink-400">Sparrow</span>
			</div>
			<Chats />
		</div>
	);
};

export default MobileHeader;
