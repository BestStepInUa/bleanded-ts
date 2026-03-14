// Задача 5

// function createUser({name, age}) {
//   return {
//     name,
//     age,
//     isAdmin: false
//   };
// }

// createUser({ name: "Alice", age: 30 });

// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.

interface ICreateUserParams {
	name: string
	age: number
}

type TUser = ICreateUserParams & { isAdmin: boolean }

function createUser({ name, age }: ICreateUserParams): TUser {
	return {
		name,
		age,
		isAdmin: false,
	}
}

const user = createUser({ name: 'Alice', age: 30 })

console.log(user)
