export function getProfileFromServer(user_id) {
	return `query MyQuery {
        users(where: {id: {_eq: "${user_id}"}}) {
          id
          description
          name
          text_posts {
            id
            created_at
            content
            likes {
              user_id
              type
            }
            comments {
              user_id
              comment
            }
            user {
                id
                name
                title
            }
          }
        }
      }
      `;
}
