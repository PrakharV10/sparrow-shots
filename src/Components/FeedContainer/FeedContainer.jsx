import React from 'react';
import { TextPostBox, ImagePostBox } from '..';

const FeedContainer = ({ posts }) => {
	return (
		<div className="px-5 mb-20 scroll-container lg:px-0 lg:ml-72 lg:max-w-2lg overflow-auto">
			<div className="text-xl font-logo font-regular mb-6 h-100">What's New?</div>
			<div>
				{posts.map((post) => {
					if (post.content) {
						return <TextPostBox key={post.id} post={post} />;
					} else {
						return <ImagePostBox />;
					}
				})}
			</div>
		</div>
	);
};

export default FeedContainer;
