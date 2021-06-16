export function getLoggedStatusFromLocalStorage() {
	const memory = JSON.parse(localStorage.getItem('Login'));
	if (memory) {
		return memory.isUserLoggedIn;
	}
	return false;
}

export function getInitialsFromName(name) {
	let result = '';
	let splittedArray = name.split(' ');
	for (let i = 0; i < splittedArray.length; i++) {
		result = result + splittedArray[i].charAt(0).toUpperCase();
	}

	return result;
}

export function getRandomColor(name) {
	const firstAlphabet = name.charAt(0).toLowerCase();
	const asciiCode = firstAlphabet.charCodeAt(0);
	const colorNum = asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

	var num = Math.round(0xffffff * parseInt(colorNum));
	var r = (num >> 16) & 255;
	var g = (num >> 8) & 255;
	var b = num & 255;

	let result = 'rgb(' + r + ', ' + g + ', ' + b + ', 0.3)';

	return result;
}
