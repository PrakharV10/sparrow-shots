export default function signupQueries(name, email, password) {
	return `mutation ($email: String!, $name: String!, $password: String!){
        Signup(email: $email, name: $name, password: $password) {
          id
          name
          email
        }
      }
      `;
}
