export function checkUserLikedOrDisliked(post, user_id) {
	let result = 0;
	post.likes.forEach((likeObject) => {
		if (likeObject.user_id === user_id) {
			result = likeObject.type;
		}
	});
	return result;
}

export function checkUserSaved(post, user_id) {
	if (post.saves.find((saveObject) => saveObject.user_id === user_id)) return true;
	return false;
}
