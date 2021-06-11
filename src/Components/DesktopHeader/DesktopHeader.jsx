import React from 'react';
import { SearchBar } from '..';

const DesktopHeader = () => {
	return (
		<header className="hidden lg:block w-screen h-20">
			<div className="w-4/5 m-auto flex justify-between items-center py-1.5 h-20">
				<div className="logo">
					Shots <span className="text-pink-400">Sparrow</span>
				</div>
				<SearchBar />
				<div></div>
			</div>
		</header>
	);
};

export default DesktopHeader;
