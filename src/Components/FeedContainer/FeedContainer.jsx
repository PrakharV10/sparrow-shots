import React from 'react';
import { TextPostBox } from '..';

const FeedContainer = () => {
	return (
		<div className="px-5 lg:px-0 lg:ml-72 lg:max-w-2lg">
			<div className="text-xl font-regular mb-6">What's New?</div>
			<TextPostBox />
			<TextPostBox />
		</div>
	);
};

export default FeedContainer;
