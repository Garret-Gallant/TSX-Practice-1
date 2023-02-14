import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/users/1"
// response data has properties: id, name, email

// Interfaces are used to define the structure of an object
interface User {
  id: number;
  name: string;
  email: string;
}

axios.get(url).then(response => {
  const user = response.data as User;

  const id = user.id
  const name = user.name
  const email = user.email

  logUser(id, name, email)
})

const logUser = (id: number, name: string, email: string) => {
  console.log(`
  The User id is: ${id}
  Their name is ${name}
  Their email is: ${email}
  `)
}


