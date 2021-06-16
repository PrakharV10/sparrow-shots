import { configureStore } from '@reduxjs/toolkit';
import { postsReducer, profileReducer, authReducer } from '../features';

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		profile: profileReducer,
		auth: authReducer,
	},
});
