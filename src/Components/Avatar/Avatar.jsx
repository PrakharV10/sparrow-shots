import React from 'react';
import { getInitialsFromName, getRandomColor } from '../../utils/util';

export const AvatarSmall = ({ name }) => {
	const initials = getInitialsFromName(name);
	let randomColor = getRandomColor(name);

	return (
		<div
			style={{ backgroundColor: randomColor }}
			className="rounded-full h-7 w-7 cursor-pointer flex justify-center items-center text-xs font-semibold text-gray-700"
		>
			{initials}
		</div>
	);
};

export const AvatarMedium = ({ name }) => {
	const initials = getInitialsFromName(name);
	let randomColor = getRandomColor(name);

	return (
		<div
			style={{ backgroundColor: randomColor }}
			className="rounded-full h-10 w-10 cursor-pointer flex justify-center items-center text-xs font-semibold text-gray-700"
		>
			{initials}
		</div>
	);
};

export const AvatarRegular = ({ name }) => {
	const initials = getInitialsFromName(name);
	let randomColor = getRandomColor(name);

	return (
		<div
			style={{ backgroundColor: randomColor }}
			className="rounded-full h-11 w-11 cursor-pointer flex justify-center items-center text-xs font-semibold text-gray-700"
		>
			{initials}
		</div>
	);
};

export const AvatarLarge = () => {
	return (
		<img
			className="rounded-full w-11 h-11 md:w-16 md:h-16 cursor-pointer"
			src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
			alt="user-profile-pic"
		/>
	);
};
