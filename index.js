const fs = require("fs");

// Function to read contacts from data.json
function readContacts() {
  const data = fs.readFileSync("data.json", "utf8");
  return JSON.parse(data);
}

// Function to write contacts to data.json
function writeContacts(contacts) {
  fs.writeFileSync("data.json", JSON.stringify(contacts, null, 2));
}

// Function to add a new contact
function addContact(name, phone, email) {
  // TODO: Implement this function
  //read contact file
  var contacts = readContacts();
  //check email format
  var validemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (validemail) {
    console.log("valid email");
  }
  else { console.log("invalid email");
  //check if name exists
  var nameExists = contacts.some((contact) => contact.name === name);
  if (nameExists) {
    console.log("User with name %s already exists.", name);
    return;
  } else {
    // add a new contact
    var contact = {
      name: name,
      phone_number: phone,
      email: email,
    };
    const now = new Date();
const currentDateTime = now.toLocaleString();
console.log(currentDateTime);


    contacts.push(contact);
    writeContacts(contacts);
  

  }
}
}

// Function to remove a contact by name
function removeContact(name) {
  // TODO: Implement this function
  //read contact file
  var contacts = readContacts();
  //check if name exists
  var filteredContacts = contacts.filter((person) => person.name !== name);
  if (filteredContacts.length === contacts.length) {
    console.log("Name not found in contacts. Cant be removed");
  } else {
    writeContacts(filteredContacts);
  }
}

// Function to update a contact by name
function updateContact(name, newPhoneNumber, newEmail) {
  // TODO: Implement this function
  //readContacts
  var contacts = readContacts();
  //check if name exists
  var userDoesExist = contacts.some((contact) => contact.name == name);
  //if it doesnmt exist log statement
  if (!userDoesExist) {
    console.log("User cannot be updated because he doesn't exist.");
  }
  //if it exists overwrite email and phonenumber
  else {
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].name === name) {
        contacts[i].phone_number = newPhoneNumber;
        contacts[i].email = newEmail;
        break;
      }
    }
    writeContacts(contacts);
  }
}

// Function to list all contacts
function listContacts() {
  //read contact file
  var contacts = readContacts();
  //loop over contacts
  for (let i = 0; i < contacts.length; i++) {
    //log contact
    console.log(
      "Name: %s, Phone number: %s, Email: %s",
      contacts[i].name,
      contacts[i].phone_number,
      contacts[i].email
    );
  }
}

// Function to view a specific contact by name
function viewContact(name) {
  // TODO: Implement this function
  var contacts = readContacts();
  var contact = contacts.filter((contact) => contact.name === name);
  if (contact.length === 0) {
    console.log("No contact with name %s found.", name);
  } else {
    console.log(
      "Name: %s, Phone number: %s, Email: %s",
      contacts[0].name,
      contacts[0].phone_number,
      contacts[0].email
    );
  }
}


  


function runProgram() {
  // Sample usage
  //addContact('Alice', '123-456-7890', 'alice@example.com');
  addContact("right Email", "098-765-4321", "asdasdasda");
  //listContacts();
  //addContact("Bob", "098-765-4321", "bob@example.com");
  //addContact("Siratcha", "+66612954429", "siratcha.air@gmail.com");
  //viewContact('Alice');
  //updateContact("Oliver", "111-222-3333", "alice@newdomain.com");
  //viewContact("Oliver");
  //removeContact("Bob");
  //listContacts();
}

runProgram();
