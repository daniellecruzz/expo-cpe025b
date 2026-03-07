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

    let choice = prompt("Main Menu:\nshow, all, add, search, quit: ");

    if (!choice) {
        // If user cancels or presses OK without input
        continue;
    }

    choice = choice.toLowerCase();

    // SHOW ONE CONTACT
    if (choice === "show") {

        let index = prompt("Enter contact index:");

        if (index !== null && index !== "") {

            index = Number(index) - 1;

            if (index >= 0 && index < contacts.length) {

                alert(
                    contacts[index].name + "\n" +
                    contacts[index].phone + "\n" +
                    contacts[index].email
                );

            } else {
                alert("Invalid index.");
            }
        }

    }

    // SHOW ALL CONTACTS
    else if (choice === "all") {

        let output = "";

        for (let i = 0; i < contacts.length; i++) {
            output += (i + 1) + ". " +
                contacts[i].name + " | " +
                contacts[i].phone + " | " +
                contacts[i].email + "\n";
        }

        alert(output);

    }

    // ADD NEW CONTACT
    else if (choice === "add") {

        let newName = prompt("Enter Name:");
        let newPhone = prompt("Enter Phone:");
        let newEmail = prompt("Enter Email:");

        if (newName && newPhone && newEmail) {

            contacts.push({
                name: newName,
                phone: newPhone,
                email: newEmail
            });

            alert("Contact added successfully.");

        } else {
            alert("All fields must be filled.");
        }

    }

    // SEARCH CONTACT
    else if (choice === "search") {

        let searchName = prompt("Enter name to search:");

        if (searchName) {

            let found = false;

            for (let i = 0; i < contacts.length; i++) {

                if (contacts[i].name.toLowerCase() === searchName.toLowerCase()) {

                    alert("Found:\n" +
                        contacts[i].name + "\n" +
                        contacts[i].phone + "\n" +
                        contacts[i].email);

                    found = true;
                    break; // stop loop when found
                }
            }

            if (!found) {
                alert("Contact not found.");
            }
        }

    }

    // QUIT PROGRAM
    else if (choice === "quit") {

        running = false;
        alert("Program exited.");

    }

    // INVALID INPUT
    else {

        alert("Invalid option. Returning to main menu.");
    }
}

