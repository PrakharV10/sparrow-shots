import React from 'react';
import { TextPostBox, ImagePostBox } from '..';

const FeedContainer = () => {
	return (
		<div className="px-5 mb-20 max-h-56 lg:px-0 lg:ml-72 lg:max-w-2lg overflow-auto">
			<div className="text-xl font-regular mb-6">What's New?</div>
			<TextPostBox />
			<TextPostBox />
			<ImagePostBox />
		</div>
	);
};

export default FeedContainer;
