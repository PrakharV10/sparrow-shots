import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getProfileFromServer } from './usersQueries';

const API_URL = process.env.REACT_APP_API_URL;
const ADMIN_SECRET = process.env.REACT_APP_ADMIN_SECRET;

const initialState = {
	currentUser: {
		id: '9d94363f-d62b-404b-b343-b923355ea94b',
		name: 'John Doe',
		title: null,
	},
	profileUser: {},
	status: 'idle',
};

export const getProfileFromUserId = createAsyncThunk(
	'users/getProfileFromUserId',
	async ({ user_id }) => {
		const response = await axios({
			url: API_URL,
			method: 'post',
			headers: {
				'x-hasura-admin-secret': ADMIN_SECRET,
			},
			data: {
				query: getProfileFromServer(user_id),
			},
		});

		return response.data;
	}
);

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: {
		[getProfileFromUserId.fulfilled]: (state, { payload }) => {
			state.profileUser = payload.data.users[0];
			state.status = 'successfull';
		},
		[getProfileFromUserId.pending]: (state) => {
			state.status = 'pending';
		},
		[getProfileFromUserId.rejected]: (state, action) => {
			state.status = 'failed';
			console.log(action.error.message);
		},
	},
});

export default usersSlice.reducer;

export function useUserSelector() {
	return useSelector((state) => state.users);
}
