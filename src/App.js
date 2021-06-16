import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Feed, Login, Signup, Profile } from './features';
import { loadPosts } from './features/posts/postsSlice';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
	const { status, userToken } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (status === 'tokenReceived') {
			axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
			dispatch(loadPosts());
		}
	}, [status, userToken, dispatch]);

	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<PrivateRoute path="/profile/:userId" element={<Profile />} />
				<Route path="/signup" element={<Signup />} />
				<PrivateRoute path="/feed" element={<Feed />} />
			</Routes>
		</div>
	);
}

export default App;
