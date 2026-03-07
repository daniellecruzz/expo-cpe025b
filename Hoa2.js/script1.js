const readline = require("readline");

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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter name: ", function(newName) {
    rl.question("Enter phone: ", function(newPhone) {
        rl.question("Enter email: ", function(newEmail) {

            contacts.push({
                name: newName,
                phone: newPhone,
                email: newEmail
            });

            console.log("First contact:",
                contacts[0].name,
                contacts[0].phone,
                contacts[0].email);

            let lastIndex = contacts.length - 1;

            console.log("Last contact:",
                contacts[lastIndex].name,
                contacts[lastIndex].phone,
                contacts[lastIndex].email);

            rl.close();
        });
    });
});