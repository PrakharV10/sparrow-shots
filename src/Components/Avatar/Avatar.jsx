import React from 'react';

export const AvatarSmall = () => {
	return (
		<div className="rounded-full h-7 w-7">
			<img
				className="rounded-full"
				src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
				alt="user-profile-pic"
			/>
		</div>
	);
};

export const AvatarMedium = () => {
	return (
		<div className="rounded-full w-10 h-10">
			<img
				className="rounded-full"
				src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
				alt="user-profile-pic"
			/>
		</div>
	);
};
