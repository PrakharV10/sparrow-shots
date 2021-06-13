import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
	addLikesOrDislikesToServer,
	deleteReactionFromServer,
	getAllPostsAndAssociatedData,
	updateLikesOrDislikesToServer,
} from './postsQueries';

const API_URL = process.env.REACT_APP_API_URL;
const ADMIN_SECRET = process.env.REACT_APP_ADMIN_SECRET;

export const loadPosts = createAsyncThunk('posts/loadPosts', async () => {
	const response = await axios({
		url: API_URL,
		method: 'post',
		headers: {
			'x-hasura-admin-secret': ADMIN_SECRET,
		},
		data: {
			query: getAllPostsAndAssociatedData(),
		},
	});
	return response.data;
});

export const addReaction = createAsyncThunk(
	'posts/addReaction',
	async ({ post_id, user_id, type }) => {
		const response = await axios({
			url: API_URL,
			method: 'post',
			headers: {
				'x-hasura-admin-secret': ADMIN_SECRET,
			},
			data: {
				query: addLikesOrDislikesToServer(post_id, user_id, type),
			},
		});

		return response.data;
	}
);

export const updateReaction = createAsyncThunk(
	'posts/updateReaction',
	async ({ post_id, user_id, type }) => {
		const response = await axios({
			url: API_URL,
			method: 'post',
			headers: {
				'x-hasura-admin-secret': ADMIN_SECRET,
			},
			data: {
				query: updateLikesOrDislikesToServer(post_id, user_id, type),
			},
		});
		return response.data;
	}
);

export const deleteReaction = createAsyncThunk(
	'posts/deleteReaction',
	async ({ post_id, user_id }) => {
		const response = await axios({
			url: API_URL,
			method: 'post',
			headers: {
				'x-hasura-admin-secret': ADMIN_SECRET,
			},
			data: {
				query: deleteReactionFromServer(post_id, user_id),
			},
		});
		return { data: response.data, post_id, user_id };
	}
);

const initialState = {
	posts: [],
	currentPost: {},
	status: 'idle',
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setCurrentPostClicked(state, action) {
			state.currentPost = action.payload.currentPost;
		},
	},
	extraReducers: {
		[loadPosts.pending]: (state) => {
			state.status = 'loading';
		},
		[loadPosts.fulfilled]: (state, action) => {
			state.status = 'successfull';
			state.posts = action.payload.data.text_posts;
		},
		[loadPosts.rejected]: (state, action) => {
			console.log(action.error.message);
			state.status = 'failed';
		},
		[addReaction.fulfilled]: (state, { payload: { data } }) => {
			console.log(data);
			state.posts.forEach((post) => {
				if (post.id === data.insert_likes_one.post_id)
					post.likes = [
						...post.likes,
						{
							user_id: data.insert_likes_one.user_id,
							type: data.insert_likes_one.type,
						},
					];
			});
		},
		[updateReaction.fulfilled]: (
			state,
			{
				payload: {
					data: { update_likes },
				},
			}
		) => {
			state.posts.forEach((post) => {
				if (post.id === update_likes.returning[0].post_id)
					post.likes = post.likes.map((like) => {
						if (like.user_id === update_likes.returning[0].user_id)
							return { ...like, type: update_likes.returning[0].type };
						else return like;
					});
			});
		},
		[deleteReaction.fulfilled]: (state, { payload: { post_id, user_id } }) => {
			state.posts = state.posts.map((post) => {
				if (post.id === post_id)
					return {
						...post,
						likes: post.likes.filter((like) => like.user_id !== user_id),
					};
				else return post;
			});
		},
	},
});

export default postsSlice.reducer;

export const { setCurrentPostClicked } = postsSlice.actions;

export function usePostSelector() {
	return useSelector((state) => state.posts);
}
