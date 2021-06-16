import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ExploreIcon, SavedIcon } from '../../Assets/svg';
import { AvatarSmall } from '../Avatar/Avatar';

const FooterNav = () => {
	const activeStyle = {
		color: '#E74C88',
	};

	const { userId, name } = useSelector((state) => state.auth);

	return (
		<div className="bg-blue-50 fixed bottom-0 w-screen h-16 px-5 border-t-2 border-black border-opacity-10 lg:hidden">
			<ul className="flex justify-between items-center h-16">
				<li>
					<NavLink to="/feed" activeStyle={activeStyle}>
						<HomeIcon />
					</NavLink>
				</li>
				<li>
					<NavLink to="/explore" activeStyle={activeStyle}>
						<ExploreIcon />
					</NavLink>
				</li>
				<li>
					<NavLink to="/saved" activeStyle={activeStyle}>
						<SavedIcon />
					</NavLink>
				</li>
				<li>
					<NavLink to={`/profile/${userId}`} activeStyle={activeStyle}>
						<AvatarSmall name={name} />
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default FooterNav;
