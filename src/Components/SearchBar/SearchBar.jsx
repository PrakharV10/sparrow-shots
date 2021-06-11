import React from 'react';
import { SearchIcon } from '../../Assets/svg';

const SearchBar = () => {
	return (
		<div className="w-2/5 bg-white-100 flex justify-between items-center rounded-sm px-3.5 py-2">
			<input className="text-sm font-light outline-none" placeholder="Search" />
			<SearchIcon />
		</div>
	);
};

export default SearchBar;
