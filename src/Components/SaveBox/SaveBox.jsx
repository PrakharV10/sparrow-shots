import React from 'react';
import { SavePostIcon } from '../../Assets/svg';

const SaveBox = () => {
	return (
		<div className="flex items-center cursor-pointer">
			<SavePostIcon />
			<span className="text-sm">Save</span>
		</div>
	);
};

export default SaveBox;
