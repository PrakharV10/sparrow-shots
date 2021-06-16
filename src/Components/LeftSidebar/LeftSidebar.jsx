import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { AvatarRegular, AddPostModal, LogoutModal } from '..';
import { AddIcon, ExploreIcon, HomeIcon, LogOutIcon, SavedIcon } from '../../Assets/svg';

const LeftSidebar = () => {
	const activeStyle = {
		color: '#36373B',
	};

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { name, userId } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	return (
		<>
			<div className="hidden absolute top-0 left-0 h-full w-72 lg:block">
				<div
					onClick={() => navigate(`/profile/${userId}`)}
					className="flex mb-9 cursor-pointer"
				>
					<AvatarRegular name={name} />
					<div className="ml-3">
						<div className="font-medium">{name}</div>
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
					{/* <li>
					<NavLink
						activeStyle={activeStyle}
						className="flex items-center h-12"
						to="/chats"
					>
						<ChatIcon />
						<span className="ml-6">Chats</span>
					</NavLink>
				</li> */}
					<li
						onClick={() => setIsOpen(true)}
						className="flex items-center h-12 cursor-pointer"
					>
						<AddIcon />
						<span className="ml-6">Create a post</span>
					</li>
					<li
						onClick={() => setIsModalOpen(true)}
						className="flex items-center h-12 cursor-pointer"
					>
						<LogOutIcon />
						<span className="ml-6">Log Out</span>
					</li>
				</ul>
			</div>
			<AddPostModal isOpen={isOpen} setIsOpen={setIsOpen} />
			<LogoutModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</>
	);
};

export default LeftSidebar;
