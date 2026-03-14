// Задача 13

// Є функція reducer:

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// Завдання:

// Типізуйте state як число.
// Створіть тип Action, що може приймати як значення лише рядки increment та decrement.
// Типізуйте функцію повністю.

type Action = {
	type: 'increment' | 'decrement'
}

function reducer(state: number, action: Action): number {
	switch (action.type) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		default:
			return state
	}
}

const result1 = reducer(0, { type: 'increment' })
reducer(result1, { type: 'increment' })
reducer(result1, { type: 'decrement' })

console.log(result1) // 1

const result2 = reducer(5, { type: 'decrement' })
reducer(result2, { type: 'increment' })
reducer(result2, { type: 'decrement' })

console.log(result2) // 4

