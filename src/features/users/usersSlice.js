import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllUsersFromServer } from "../../graphql/usersQueries";

const API_URL = process.env.REACT_APP_API_URL;

export const getAllUsers = createAsyncThunk("users", async () => {
	const response = await axios({
		url: API_URL,
		method: "post",
		data: {
			query: getAllUsersFromServer(),
		},
	});
	if (response.data.data.users) {
		return response.data;
	} else {
		throw new Error(response.errors);
	}
});

export const initialState = {
	allUsers: [],
	status: "users",
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: {
		[getAllUsers.fulfilled]: (state, action) => {
			state.status = "users/fulfilled";
			state.allUsers = action.payload.data.users;
		},
		[getAllUsers.pending]: (state) => {
			state.status = "users/pending";
		},
		[getAllUsers.rejected]: (state, action) => {
			state.status = "users/rejected";
			console.log(action.payload);
		},
	},
});

export default usersSlice.reducer;
