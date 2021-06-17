export function getAllUsersFromServer() {
	return `query MyQuery {
        users {
          id
          name
          title
        }
      }
      `;
}
