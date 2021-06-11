import React from 'react';
import { AvatarMedium, CommentBox, SaveBox, LikeBox } from '..';

const TextPostBox = () => {
	return (
		<div className="mb-6">
			<div className="flex w-100 mb-4">
				<AvatarMedium />
				<div className="ml-2.5 flex-1">
					<div className="font-regular text-sm text-gray-400">Hetav Desai</div>
					<p className="font-light">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit rhoncus
						nibh in ultricies senectus sapien. Varius viverra tempus varius varius ut
						sed amet.
					</p>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex">
					<CommentBox />
					<SaveBox />
				</div>
				<div>
					<LikeBox />
				</div>
			</div>
		</div>
	);
};

export default TextPostBox;
