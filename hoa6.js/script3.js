class User {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
}

class Users {
    constructor() {
        this.users = new Map();
    }

    add(name, surname, email) {
        if (this.users.has(email)) return;
        let user = new User(name, surname, email);
        this.users.set(email, user);
    }

    delete(email) {
        this.users.delete(email);
    }

    get(email) {
        return this.users.get(email);
    }

    getAll(field) {
        let arr = Array.from(this.users.values());
        arr.sort((a, b) => a[field].localeCompare(b[field]));
        return arr;
    }
}

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");

console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));