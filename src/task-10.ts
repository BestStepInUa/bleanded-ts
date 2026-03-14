// Задача 10

// У вас є масив імен користувачів:

// const users = ["Alice", "Bob", "Charlie"];

// Завдання:

// 1. Створіть типізовану функцію toUserObjects, яка приймає масив рядків (імен користувачів).

// 2. Усередині функції переберіть масив імен та для кожного імені створи об’єкт з такими властивостями:

// id — порядковий номер (починаючи з 1),
// name — саме ім’я користувача (рядок з масиву).
// 3. Функція повинна повертати масив отриманих об’єктів.

// 4. Переконайтеся, що результат функції має правильну типізацію, а TypeScript не видає помилок.

// Приклад виклику:

// toUserObjects(users);
// Повертає: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]

const users: string[] = ['Alice', 'Bob', 'Charlie']

interface User {
	id: number
	name: string
}

function toUserObjects(arr: string[]): User[] {
	return arr.map((name, index) => ({
		id: index,
		name: name,
	}))
}

console.log(toUserObjects(users))
