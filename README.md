# nodejs-basics-exam

This repo contains a task that allows students to test their knowledge in basic concepts of nodejs like datatypes, control flow logic and writing items to a file.This project will allow users to add, remove, update, and view contacts. Each contact will have properties such as name, phone number, and email.

## Tasks

Implement all the Functions that have TODO attached to them.
The runProgram() function contains program steps. Once you implemented a step you can uncomment a corresponding call and check if it works.

Console output should be formatted this way, use the funcion:
Name: Oliver Schmidt, PhoneNumber: +49123456789, Email: schmidt_ol@yahoo.de.

## Extra Tasks

Please implement addition tasks

### Distinct User Name

When creating new Users it shouldn't be possible to create Users with an existing email.

### Validate Email Format:

Validate the format of the email before adding a new contact. Ensure the email follows a standard pattern (e.g., using regular expressions).
https://regex101.com/ use this to create a regular expression that checks if the email property contains a valid email address

### Timestamping:

Add timestamps for when a contact is created and last updated.
Example:

{
"name": "Oliver",
"phone_number": "111-222-3333",
"email": "alice@newdomain.com",
"creation_time": "23.06.2024 16:00",
"update_time": "23.06.2024 17:05"
}

### Export Contacts:

Implement a function to export all contacts to a CSV file.
Create a function called "exportContactsToCsv" that reads the content of data.json and exports it to a file
called contacts.csv with the following syntax:
Syntax:
oliver Schmidt; +49123455; schmidt_oli@yahoo.de

When you are done open the csv with excel and check if everything is displayed correctly.
