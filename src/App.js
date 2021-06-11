import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Feed, Login, Profile, Signup } from './Pages';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/feed" element={<Feed />} />
			</Routes>
		</div>
	);
}

export default App;
