import React from 'react';
import { NavLink } from 'react-router-dom';
import { AvatarRegular } from '..';
import { ChatIcon, ExploreIcon, HomeIcon, SavedIcon } from '../../Assets/svg';

const LeftSidebar = () => {
	const activeStyle = {
		color: '#36373B',
	};

	return (
		<div className="hidden absolute top-0 left-0 h-full w-72 lg:block">
			<div className="flex mb-9">
				<AvatarRegular />
				<div className="ml-3">
					<div className="font-medium">Prakhar Varshney</div>
					<div className="text-gray-400 text-xs font-light">Web Developer</div>
				</div>
			</div>
			<ul className="w-100 text-gray-400">
				<li>
					<NavLink
						activeStyle={activeStyle}
						className="flex items-center h-12"
						to="/feed"
					>
						<HomeIcon />
						<span className="ml-6">Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						activeStyle={activeStyle}
						className="flex items-center h-12"
						to="/explore"
					>
						<ExploreIcon />
						<span className="ml-6">Explore</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						activeStyle={activeStyle}
						className="flex items-center h-12"
						to="/saved"
					>
						<SavedIcon />
						<span className="ml-6">Saved</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						activeStyle={activeStyle}
						className="flex items-center h-12"
						to="/chats"
					>
						<ChatIcon />
						<span className="ml-6">Chats</span>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default LeftSidebar;
