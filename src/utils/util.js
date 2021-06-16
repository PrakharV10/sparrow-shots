export function getLoggedStatusFromLocalStorage() {
	const memory = JSON.parse(localStorage.getItem('Login'));
	if (memory) {
		return memory.isUserLoggedIn;
	}
	return false;
}
