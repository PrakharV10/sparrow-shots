export default function loginQueries() {
	return `query ($email: String!, $password: String!) {
        Login(email: $email, password: $password) {
          id
          email
          name
          title
          description
          token
        }
      }
      `;
}
