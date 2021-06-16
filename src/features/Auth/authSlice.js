import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { authenticateServerCall, checkLocalStorage, signupServerCall } from './utils';

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
	const response = await authenticateServerCall(email, password);
	if (response.data.data.Login) {
		return response.data;
	} else {
		throw new Error(response.data.errors);
	}
});

export const signupUser = createAsyncThunk('auth/signupUser', async ({ name, email, password }) => {
	const response = await signupServerCall(name, email, password);
	if (response.data.data.Signup) {
		return response.data;
	} else {
		throw new Error(response.data.errors);
	}
});

const initialState = {
	userToken: checkLocalStorage('UserToken'),
	status: checkLocalStorage('UserToken') ? 'tokenReceived' : 'idle',
	userId: checkLocalStorage('UserId'),
	name: checkLocalStorage('user') ? checkLocalStorage('user').name : null,
	title: checkLocalStorage('user') ? checkLocalStorage('user').title : null,
	isUserLoggedIn: checkLocalStorage('isUserLoggedIn'),
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		resetAuthStatus: (state) => {
			state.status = 'idle';
		},
		logOutUser: (state) => {
			localStorage.removeItem('UserToken');
			localStorage.removeItem('UserId');
			localStorage.removeItem('isUserLoggedIn');
			localStorage.removeItem('user');
			state.isUserLoggedIn = false;
			state.status = 'idle';
			state.userId = null;
			state.userToken = null;
			state.name = null;
			state.title = null;
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
		[loginUser.rejected]: (state, action) => {
			console.log(action.payload);
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
			state.status = 'loading';
		},
		[signupUser.rejected]: (state) => {
			state.status = 'rejected';
		},
	},
});

export default authSlice.reducer;
export const { resetAuthStatus, logInByLocalStorage, logOutUser } = authSlice.actions;
