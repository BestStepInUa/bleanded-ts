// Задача 8

// enum Role {
//   Admin,
//   User,
//   Guest
// }

// Завдання:

// 1. Створіть функцію getPermissions, яка приймає параметр role типу Role.

// 2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:

// Admin має права: "create", "read", "update", "delete"
// User має права: "read", "update"
// Guest має лише право: "read"
// 3. Типізуйте параметр і тип повернення функції getPermissions.

// 4. Перевірте, що TypeScript не дозволяє передати в getPermissions значення, якого немає в Role.

enum Role {
	Admin,
	User,
	Guest,
}

enum PERMISION {
	create = 'created',
	read = 'read',
	update = 'update',
	delete = 'delete',
}

function getPermissions(role: Role): string[] {
	if (role === Role.Admin) {
		return [PERMISION.create, PERMISION.read, PERMISION.update, PERMISION.delete]
	} else if (role === Role.User) {
		return [PERMISION.read, PERMISION.update]
	} else if (role === Role.Guest) {
		return [PERMISION.read]
	} else return []
}

console.log(getPermissions(Role.Admin))
console.log(getPermissions(Role.User))
console.log(getPermissions(Role.Guest))
// console.log(getPermissions(null))

