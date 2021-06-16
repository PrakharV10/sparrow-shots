import axios from 'axios';
import SERVER_URL from '../../backend/api';
import loginQueries from '../../graphql/loginQueries';
import signupQueries from '../../graphql/signupQueries';

export async function authenticateServerCall(email, password) {
	const response = await axios.post(SERVER_URL, {
		query: loginQueries(),
		variables: { email, password },
	});
	return response;
}

export async function signupServerCall(name, email, password) {
	const response = await axios.post(SERVER_URL, {
		query: signupQueries(),
		variables: { name, email, password },
	});
	return response;
}

export function checkLocalStorage(item) {
	const memory = JSON.parse(localStorage?.getItem(item));
	if (memory) return memory;
	return null;
}

/**
 * signupServerCall()
 * response.errors[0].extensions.internal.response.body.error
 * response.data.Signup
 * 	id, name, email
 */
