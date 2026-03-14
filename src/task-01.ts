// Задача 1

// Опис: Є об'єкт settings, який містить налаштування.

// const settings = {
//   darkMode: true,
//   fontSize: 16,
//   language: "en",
// };

// Завдання:

// Створіть тип Settings, який описує цей об'єкт.
// Типізуйте settings через цей тип.

type TSettings = {
	darkMode: boolean
	fontSize: number
	language: string
}

const settings: TSettings = {
	darkMode: true,
	fontSize: 16,
	language: 'en',
}

settings.darkMode = false
settings.fontSize = 14

console.log(settings)

