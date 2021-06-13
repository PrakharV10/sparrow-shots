import React from 'react';
import { ProfileHeader } from '..';

const ProfileContainer = () => {
	return (
		<div className="px-5 mb-20 scroll-container lg:px-0 lg:ml-72 overflow-auto">
			<ProfileHeader />
			<div className="grid grid-cols-3 grid-flow-row gap-1 md:gap-2 lg:gap-4 lg:ml-20">
				<div>
					<img
						className="object-cover max-h-64 w-full"
						src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80"
						alt=""
					/>
				</div>
				<div>
					<img
						className="object-cover max-h-64 w-full"
						src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
						alt=""
					/>
				</div>
				<div>
					<img
						className="object-cover max-h-64 w-full min-h-full"
						src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfileContainer;
