import React from "react";
import { useNavigate } from "react-router";
import { AvatarMedium } from "..";

const SuggestionProfileBox = ({ user }) => {
	const navigate = useNavigate();

	return (
		<div className="flex justify-between items-center mb-4">
			<div
				onClick={() => navigate(`/profile/${user.id}`)}
				className="flex items-center cursor-pointer"
			>
				<AvatarMedium name={user.name} />
				<div className="flex flex-col ml-3">
					<span className="text-sm font-medium">{user.name}</span>
					<span className="text-xs text-gray-400 font-light">
						Web Developer
					</span>
				</div>
			</div>
			<div>
				<button className="px-4 py-2 text-pink-500 text-sm hover:text-pink-600">
					Follow
				</button>
			</div>
		</div>
	);
};

export default SuggestionProfileBox;
