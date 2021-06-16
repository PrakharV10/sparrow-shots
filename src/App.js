import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Feed, Login, Signup } from './features';
import { Profile } from './Pages';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
	const { status, userToken } = useSelector((state) => state.auth);

	useEffect(() => {
		if (status === 'tokenReceived') {
			axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
		}
	}, [status, userToken]);

	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<PrivateRoute path="/profile/:userId" element={<Profile />} />
				<Route path="/signup" element={<Signup />} />
				<PrivateRoute path="/" element={<Feed />} />
			</Routes>
		</div>
	);
}

export default App;
