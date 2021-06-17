import { configureStore } from "@reduxjs/toolkit";
import {
	postsReducer,
	profileReducer,
	authReducer,
	usersReducer,
} from "../features";

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		profile: profileReducer,
		auth: authReducer,
		users: usersReducer,
	},
});
