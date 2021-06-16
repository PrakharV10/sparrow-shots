import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router';

const PrivateRoute = ({ path, ...props }) => {
	const { isUserLoggedIn } = useSelector((state) => state.auth);
	return isUserLoggedIn ? (
		<Route path={path} {...props} />
	) : (
		<Navigate to="/"" state={{ from: path }} replace={true} />
	);
};

export default PrivateRoute;
