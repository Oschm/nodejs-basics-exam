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

function writeStringFileContent(fileName, fileContent) {
  fs.writeFileSync(fileName, fileContent);
}

/**
 * Function to add a new contact and perform necessary checks before creating a new contact.
 * @param {name} String The name of the contact.
 * @param {phone} String The phone number of the contact. Checked by regexp. (TODO)
 * @param {email} String The email address of the contact. Checked by regexp. (TODO)
 */
function addContact(name, phone, email) {
  // TODO: Implement this function
  //read contact file
  var contacts = readContacts();

  //check if name exists
  var doesNameExist = contacts.some((contact) => contact.name === name);

  //check email format
  var validEmailExpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var validPhoneNumberExpression = /^(\+\d{1,2}\s)??\d{3}?[\s.-]\d*/;

  var isEmailValid = validEmailExpression.test(email);
  var isPhoneNumberValid = validPhoneNumberExpression.test(phone);

  if (isEmailValid && isPhoneNumberValid && !doesNameExist) {
    console.log("valid email");
    createContact(contacts, name, phone, email);
  } else {
    if (!isEmailValid) {
      console.log("invalid email");
    } else if (!isPhoneNumberValid) {
      console.log("invalid PhoneNumber");
    } else if (doesNameExist) {
      console.log("User with name %s already exists.", name);
    }
  }
}

/**
 * adds contact to contacts array and write to file
 * @param {Array} contacts
 * @param {String} name The name of the contact.
 * @param {String} phone The phone number of the contact. Checked by regexp. (TODO)
 * @param {String} email The email address of the contact. Checked by regexp.
 */
function createContact(contacts, name, phone, email) {
  // add a new contact
  var contact = {
    name: name,
    phone_number: phone,
    email: email,
  };
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  console.log(currentDateTime);
  contact.creation_time = currentDateTime;

  contacts.push(contact);
  writeContacts(contacts);
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
        contacts[i].update_time = new Date().toLocaleString();
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

function exportContactsToCsv(fileName, hasHeader) {
  //read the file
  var contacts = readContacts();
  var fileContent = "";
  //convert to excel syntax
  for (var i = 0; i < contacts.length; i++) {
    var contact = contacts[i];
    fileContent +=
      contact.name + ";" + contact.phone_number + ";" + contact.email + "\n";
  }
  //write the csv file
  writeStringFileContent(fileName, fileContent);
}

function runProgram() {
  // Sample usage
  //addContact('Alice', '123-456-7890', 'alice@example.com');
  //addContact("asdasdsadasad", "098-765-4321", "bob@example.com");
  //listContacts();
  //addContact("Bob", "098-765-4321", "bob@example.com");
  //addContact("Siratcha", "098-765-4321", "siratcha.air@gmail.com");
  //viewContact('Alice');
  //updateContact("Bob", "111-222-3333", "alice@newdomain.com");
  //viewContact("Oliver");
  //removeContact("Bob");
  //listContacts();
  exportContactsToCsv("contactsWithHeader.csv", true);
  exportContactsToCsv("contactsWithoutHeader.csv", false);
}

runProgram();
