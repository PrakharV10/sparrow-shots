import React from 'react';
import { useSelector } from 'react-redux';
import { AvatarLarge } from '../Avatar/Avatar';

const ProfileHeader = ({ profileUser }) => {
	const { userId, name } = useSelector((state) => state.auth);

	return (
		<div className="flex border-b-2 border-gray-400 border-opacity-40 w-full lg:border-b-0 mb-5">
			<AvatarLarge name={name} />
			<div className="ml-4 border-b-0 border-gray-400 pb-3 border-opacity-40 lg:border-b-2">
				<div className="font-regular text-lg lg:text-xl">{profileUser.name}</div>
				<div className="flex justify-between items-center mb-6 w-full">
					<p className="text-sm lg:text-base font-light flex-1">
						{profileUser.description
							? profileUser.description
							: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
					</p>
					{userId !== profileUser.id && (
						<button className="hidden flex-shrink-0 ml-8 w-24 h-10 rounded-full text-pink-500 border-2 border-pink-500 text-sm lg:block">
							Follow
						</button>
					)}
				</div>
				<div className="flex items-center justify-between text-sm lg:text-base w-100">
					<div className="flex items-center w-100">
						<div className="mr-3 font-light">
							<span className="font-medium">19.6k </span>
							Followers
						</div>
						<div className="mr-2 font-light">
							<span className="font-medium">0 </span>
							Following
						</div>
					</div>
					{userId !== profileUser.id && (
						<button className="text-pink-500 text-sm lg:hidden">Follow</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfileHeader;
