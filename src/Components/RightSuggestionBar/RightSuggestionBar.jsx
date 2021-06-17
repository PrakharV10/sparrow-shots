import React from "react";
import { useSelector } from "react-redux";
import { SuggestionProfileBox } from "../";

const RightSuggestionBar = () => {
	const { allUsers } = useSelector((state) => state.users);
	const { userId } = useSelector((state) => state.auth);

	return (
		<div className="hidden absolute top-0 right-0 h-full w-72 xl:block">
			<div className="text-xl font-logo font-regular mb-6 h-100">
				Suggestions
			</div>
			<div>
				{allUsers.length !== 0 &&
					allUsers.map((user) => {
						if (user.id !== userId) {
							return (
								<SuggestionProfileBox
									key={user.id}
									user={user}
								/>
							);
						} else {
							return null;
						}
					})}
			</div>
		</div>
	);
};

export default RightSuggestionBar;
