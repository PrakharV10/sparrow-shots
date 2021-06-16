import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getProfileFromServer } from '../../graphql/profileQueries';

const API_URL = process.env.REACT_APP_API_URL;

const initialState = {
	profileUser: [],
	profileStatus: 'idle',
};

export const getProfileFromUserId = createAsyncThunk(
	'profile/getProfileFromUserId',
	async ({ user_id }) => {
		const response = await axios({
			url: API_URL,
			method: 'post',
			data: {
				query: getProfileFromServer(user_id),
			},
		});
		if (response.data.data.users) return response.data;
		else throw new Error(response.errors);
	}
);

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: {
		[getProfileFromUserId.fulfilled]: (state, { payload }) => {
			state.profileUser = payload.data.users[0];
			state.profileStatus = 'successfull';
		},
		[getProfileFromUserId.pending]: (state) => {
			state.profileStatus = 'pending';
		},
		[getProfileFromUserId.rejected]: (state, action) => {
			state.profileStatus = 'failed';
			console.log(action.error.message);
		},
	},
});

export default profileSlice.reducer;
