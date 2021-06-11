import React from 'react';
import { SearchBar } from '..';

const DesktopHeader = () => {
	return (
		<header className="hidden h-20 mb-6 shadow lg:block xl:mx-0">
			<div className="m-auto flex items-center py-1.5 h-20 lg:w-11/12 xl:w-4/5">
				<div className="logo w-72">
					Shots <span className="text-pink-500">Sparrow</span>
				</div>
				<SearchBar />
				<div></div>
			</div>
		</header>
	);
};

export default DesktopHeader;
