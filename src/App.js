import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from './Pages/Feed/Feed';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/feed" element={<Feed />} />
			</Routes>
		</div>
	);
}

export default App;
