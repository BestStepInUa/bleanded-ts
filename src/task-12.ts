// Задача 12

// Є функція sendDoneStatus:

// function sendDoneStatus(callback) {
//   callback("done");
// }

// Завдання:

// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.

type Callback = (status: string) => void

function sendDoneStatus(callback: Callback): void {
	callback('done')
}

sendDoneStatus((message) => {
	console.log('Status:', message)
})

