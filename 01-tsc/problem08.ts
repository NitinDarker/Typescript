// Given a list of users, filter out the users that are legal (greater than 18 years of age)
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filterLegalUsers(Users: User[]): User[] {
    let res: User[] = [];
    for (let user of Users) {
        if (user.age >= 18) res.push(user);
    }
    return res;
}