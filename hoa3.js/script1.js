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

// FUNCTION 1: Show one contact
function showContact(list, index) {

    if (!Array.isArray(list)) {
        alert("Invalid contact list.");
        return;
    }

    if (index >= 0 && index < list.length) {
        alert(
            list[index].name + "\n" +
            list[index].phone + "\n" +
            list[index].email
        );
    } else {
        alert("Invalid index.");
    }
}

// FUNCTION 2: Show all contacts
function showAllContacts(list) {

    if (!Array.isArray(list)) {
        alert("Invalid contact list.");
        return;
    }

    let output = "";

    for (let i = 0; i < list.length; i++) {
        output += (i + 1) + ". " +
            list[i].name + " | " +
            list[i].phone + " | " +
            list[i].email + "\n";
    }

    alert(output);
}

// FUNCTION 3: Add new contact
function addNewContact(list, name, phone, email) {

    if (!Array.isArray(list)) {
        alert("Invalid contact list.");
        return;
    }

    if (name && phone && email) {

        list.push({
            name: name,
            phone: phone,
            email: email
        });

        alert("Contact added successfully.");

    } else {
        alert("All contact data must be provided.");
    }
}