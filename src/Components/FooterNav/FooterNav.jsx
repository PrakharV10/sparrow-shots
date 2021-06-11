import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ExploreIcon, SavedIcon } from '../../Assets/svg';
import { AvatarSmall } from '../Avatar/Avatar';

const FooterNav = () => {
	const activeStyle = {
		color: '#E74C88',
	};

	return (
		<div className="absolute bottom-0 w-screen h-16 px-5 lg:hidden">
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
					<NavLink to="/" activeStyle={activeStyle}>
						<AvatarSmall />
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default FooterNav;
