import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
	currentUser: {
		id: '9d94363f-d62b-404b-b343-b923355ea94b',
		name: 'John Doe',
		title: null,
	},
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: {},
});

export default usersSlice.reducer;

export function useUserSelector() {
	return useSelector((state) => state.users);
}
