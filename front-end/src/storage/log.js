// In-memory users array. Other modules import this and mutate it.
export const usersData = [{
	username: 'admin',
	password: 'admin123',
	role: 'admin',
	email: 'admin@example.com'
}];

// helper to replace in-memory users (used at app startup to hydrate from users.json)
export function replaceUsers(arr) {
	usersData.length = 0;
	if (Array.isArray(arr)) usersData.push(...arr);
}

// helper to append user in-memory
export function addUser(user) {
	usersData.push(user);
}

export default usersData;