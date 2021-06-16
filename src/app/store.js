import { configureStore } from '@reduxjs/toolkit';
import { postsReducer, usersReducer, authReducer } from '../features';

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		users: usersReducer,
		auth: authReducer,
	},
});
