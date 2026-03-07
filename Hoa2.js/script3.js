let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let running = true;

while (running) {

    let choice = prompt("Choose: first, last, all, new, quit: ");

    if (choice === "first") {

        alert("First contact:\n" +
            contacts[0].name + "\n" +
            contacts[0].phone + "\n" +
            contacts[0].email);

    } else if (choice === "last") {

        let lastIndex = contacts.length - 1;

        alert("Last contact:\n" +
            contacts[lastIndex].name + "\n" +
            contacts[lastIndex].phone + "\n" +
            contacts[lastIndex].email);

    } else if (choice === "all") {

        let output = "";

        for (let i = 0; i < contacts.length; i++) {
            output += (i + 1) + ". " +
                contacts[i].name + " | " +
                contacts[i].phone + " | " +
                contacts[i].email + "\n";
        }

        alert(output);

    } else if (choice === "new") {

        let newName = prompt("Enter name:");
        let newPhone = prompt("Enter phone:");
        let newEmail = prompt("Enter email:");

        if (newName && newPhone && newEmail) {

            contacts.push({
                name: newName,
                phone: newPhone,
                email: newEmail
            });

            alert("Contact added.");

        } else {

            alert("All fields are required.");
        }

    } else if (choice === "quit") {

        running = false;
        alert("Program exited.");

    } else {

        alert("Invalid choice.");
    }
}