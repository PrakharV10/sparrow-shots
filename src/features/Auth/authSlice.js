import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { authenticateServerCall, checkLocalStorage, signupServerCall } from './utils';

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
	const response = await authenticateServerCall(email, password);
	return response.data;
});

export const signupUser = createAsyncThunk('auth/signupUser', async ({ name, email, password }) => {
	const response = await signupServerCall(name, email, password);
	console.log(response);
	if (response.errors) {
		throw new Error('Invalid Request');
	} else {
		return response.data;
	}
});

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		userToken: checkLocalStorage('UserToken'),
		status: checkLocalStorage('UserToken') ? 'tokenReceived' : 'idle',
		userId: checkLocalStorage('UserId'),
		name: checkLocalStorage('user') ? checkLocalStorage('user').name : null,
		title: checkLocalStorage('user') ? checkLocalStorage('user').title : null,
		isUserLoggedIn: checkLocalStorage('isUserLoggedIn'),
	},
	reducers: {
		resetAuthStatus: (state) => {
			state.status = 'idle';
		},
	},
	extraReducers: {
		[loginUser.fulfilled]: (state, action) => {
			state.isUserLoggedIn = true;
			const {
				Login: { id, name, title, token },
			} = action.payload.data;
			state.userToken = token;
			state.userId = id;
			state.name = name;
			state.title = title;
			localStorage.setItem('UserToken', JSON.stringify(token));
			localStorage.setItem('UserId', JSON.stringify(id));
			localStorage.setItem('isUserLoggedIn', JSON.stringify(true));
			localStorage.setItem('user', JSON.stringify({ name, title }));
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			state.status = 'tokenReceived';
		},
		[loginUser.pending]: (state) => {
			state.status = 'loading';
		},
		[loginUser.rejected]: (state) => {
			state.status = 'rejected';
		},
		[signupUser.fulfilled]: (state, action) => {
			state.isUserLoggedIn = true;
			const {
				Signup: { id, name, title, token },
			} = action.payload.data;
			state.userToken = token;
			state.userId = id;
			state.name = name;
			state.title = title;
			localStorage.setItem('UserToken', JSON.stringify(token));
			localStorage.setItem('UserId', JSON.stringify(id));
			localStorage.setItem('isUserLoggedIn', JSON.stringify(true));
			localStorage.setItem('user', JSON.stringify({ name, title }));
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			state.status = 'tokenReceived';
		},
		[signupUser.pending]: (state) => {
			state.status = 'pending';
		},
		[signupUser.rejected]: (state) => {
			state.status = 'rejected';
		},
	},
});

export default authSlice.reducer;
export const { resetAuthStatus, logInByLocalStorage } = authSlice.actions;
