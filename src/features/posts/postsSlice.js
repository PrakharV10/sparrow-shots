import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
	addCommentToServer,
	addLikesOrDislikesToServer,
	addSavedToServer,
	deleteReactionFromServer,
	getAllPostsAndAssociatedData,
	postPieceToServer,
	removeSavedFromServer,
	updateLikesOrDislikesToServer,
} from '../../graphql/postsQueries';

const API_URL = process.env.REACT_APP_API_URL;

export const loadPosts = createAsyncThunk('posts/loadPosts', async () => {
	const response = await axios({
		url: API_URL,
		method: 'post',
		data: {
			query: getAllPostsAndAssociatedData(),
		},
	});
	if (response.data.data.text_posts) {
		return response.data;
	} else {
		throw new Error(response.errors);
	}
});

export const createNewPiece = createAsyncThunk(
	'posts/createNewPiece',
	async ({ user_id, content }) => {
		const response = await axios({
			url: API_URL,
			method: 'post',
			data: {
				query: postPieceToServer(user_id, content),
			},
		});
		if (response.data.data.insert_text_posts_one) {
			return response.data;
		} else {
			throw new Error(response.errors);
		}
	}
);

export const addComment = createAsyncThunk(
	'posts/addComment',
	async ({ user_id, post_id, comment }) => {
		const response = await axios({
			url: API_URL,
			method: 'post',
			data: {
				query: addCommentToServer(user_id, post_id, comment),
			},
		});
		console.log(response.data.data.insert_comments_one);
		if (response.data.data.insert_comments_one) {
			return response.data;
		} else {
			throw new Error(response.errors);
		}
	}
);

export const addToSaved = createAsyncThunk('posts/addToSaved', async ({ user_id, post_id }) => {
	const response = await axios({
		url: API_URL,
		method: 'post',
		data: {
			query: addSavedToServer(user_id, post_id),
		},
	});
	if (response.data.data.insert_saves_one) {
		return response.data;
	} else {
		throw new Error(response.errors);
	}
});

export const deleteFromSaved = createAsyncThunk(
	'posts/deleteFromSaved',
	async ({ user_id, post_id }) => {
		const response = await axios({
			url: API_URL,
			method: 'post',
			data: {
				query: removeSavedFromServer(user_id, post_id),
			},
		});
		if (response.data.data.delete_saves) {
			return { user_id, post_id };
		} else {
			throw new Error(response.errors);
		}
	}
);

export const addReaction = createAsyncThunk(
	'posts/addReaction',
	async ({ post_id, user_id, type }) => {
		const response = await axios({
			url: API_URL,
			method: 'post',
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
			state.status = 'posts/loading';
		},
		[loadPosts.fulfilled]: (state, action) => {
			console.log(action.payload);
			state.status = 'posts/fulfilled';
			state.posts = action.payload.data.text_posts;
		},
		[loadPosts.rejected]: (state, action) => {
			console.log(action.error.message);
			state.status = 'posts/rejected';
		},
		[createNewPiece.fulfilled]: (state, action) => {
			state.status = 'posts/fulfilled';
			console.log(action.payload.data.insert_text_posts_one);
			state.posts = [action.payload.data.insert_text_posts_one, ...state.posts];
		},
		[createNewPiece.pending]: (state) => {
			state.status = 'posts/posting';
		},
		[createNewPiece.rejected]: (state, action) => {
			state.status = 'posts/rejected';
			console.log(action.error.message);
		},
		[addComment.fulfilled]: (state, { payload }) => {
			const { id, comment, user, post_id } = payload.data.insert_comments_one;
			state.status = 'posts/fulfilled';
			state.posts.forEach((post) => {
				if (post.id === post_id) post.comments = [{ id, comment, user }, ...post.comments];
			});
		},
		[addComment.rejected]: (state, action) => {
			state.status = 'posts/rejected';
			console.log(action.error.message);
		},
		[addToSaved.fulfilled]: (state, { payload }) => {
			const { id, user_id, post_id } = payload.data.insert_saves_one;
			state.status = 'posts/fulfilled';
			state.posts.forEach((post) => {
				if (post.id === post_id) post.saves = [...post.saves, { id, user_id }];
			});
		},
		[addToSaved.rejected]: (state, action) => {
			state.status = 'posts/rejected';
			console.log(action.error.message);
		},
		[deleteFromSaved.fulfilled]: (state, { payload: { user_id, post_id } }) => {
			state.status = 'posts/fulfilled';
			state.posts = state.posts.map((post) => {
				if (post.id === post_id)
					return { ...post, saves: post.saves.filter((one) => one.user_id !== user_id) };
				else return post;
			});
		},
		[deleteFromSaved.rejected]: (state, action) => {
			state.status = 'posts/rejected';
			console.log(action.error.message);
		},
		[addReaction.fulfilled]: (state, { payload: { data } }) => {
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
