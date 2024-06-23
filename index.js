const fs = require('fs');

// Function to read contacts from data.json
function readContacts() {
    const data = fs.readFileSync('data.json', 'utf8');
    return JSON.parse(data);
}

// Function to write contacts to data.json
function writeContacts(contacts) {
    fs.writeFileSync('data.json', JSON.stringify(contacts, null, 2));
}

// Function to add a new contact
function addContact(name, phone, email) {
    // TODO: Implement this function
    //read contact file
    var contacts = readContacts();
    // add a new contact 
    var contact = {"name": "Siratcha Dulyakorn", "phone_number": "+66612954429", "email":"siratcha.air@gmail.com"};
    contact.push(contacts);
    var contacts = writeContacts(contact);
}

// Function to remove a contact by name
function removeContact(name) {
    // TODO: Implement this function
     //read contact file
     var contacts = readContacts();

}

// Function to update a contact by name
function updateContact(name, newPhone, newEmail) {
    // TODO: Implement this function
}

// Function to list all contacts
function listContacts() {
    // TODO: Implement this function
    console.log("I'm here ");
    //read contact file
    var contacts = readContacts();
    //loop over contacts
    for (let i = 0; i < contacts.length; i++) {
        //log contact
        console.log("Name: %s, Phone number:%s, Email:%s", contacts[i].name, contacts[i].phone_number, contacts[i].email);
    }
}

// Function to view a specific contact by name
function viewContact(name) {
    // TODO: Implement this function
}
function runProgram(){
// Sample usage
//addContact('Alice', '123-456-7890', 'alice@example.com');
//addContact('Bob', '098-765-4321', 'bob@example.com');
listContacts();
addContact();//addContact('Bob', '098-765-4321', 'bob@example.com');
//viewContact('Alice');
//updateContact('Alice', '111-222-3333', 'alice@newdomain.com');
//viewContact('Alice');
//removeContact('Bob');
//listContacts();
}

runProgram();