class User {
    #firstName;
    #lastName;
    #email;

    constructor(firstName, lastName, email) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setEmail(email);
    }

    setFirstName(name) {
        let namePattern = /^[A-Z][a-zA-Z]*$/;
        if (!namePattern.test(name)) {
            throw new Error("Invalid first name format");
        }
        this.#firstName = name;
    }

    getFirstName() {
        return this.#firstName;
    }

    setLastName(name) {
        let namePattern = /^[A-Z][a-zA-Z]*$/;
        if (!namePattern.test(name)) {
            throw new Error("Invalid last name format");
        }
        this.#lastName = name;
    }

    getLastName() {
        return this.#lastName;
    }

    setEmail(email) {
        let emailPattern = /^[a-zA-Z]+(\.[a-zA-Z]+)*@[a-zA-Z]+(\.[a-zA-Z]+)+$/;
        if (!emailPattern.test(email)) {
            throw new Error("Invalid email format");
        }
        this.#email = email;
    }

    getEmail() {
        return this.#email;
    }
}

try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1);

    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // Error
} catch(err) {
    console.log(err.message);
}