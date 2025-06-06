interface User {
    id: number,
    name: string,
    age: number,
    email: string,
    password: string
}

type UserDerive = Pick<User, 'name' | 'age'>;

function updateUser(newUser: UserDerive) {
    // Update user
}