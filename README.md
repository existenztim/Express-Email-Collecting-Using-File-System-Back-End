# Express JavaScript Node (FS)

This is the back-end part of this project. It's designed to take user input from a form, validate the email address provided, and store it in a file called mails.txt.

I used the Express framework, JavaScript, and Node.js to create a web application that will take user data and store it for later use. Additionally, we will be using the File System (FS) technique to read pre written code in users.json and write the user data to the mails.txt file.

## Getting Started

To get started, you will need to install Node.js and the Express framework. You can find instructions for doing this on the official Node.js and Express websites.

Once you have Node.js and Express installed, you can create a new project by running the following command in your terminal:

```
npx express-generator
```

This will create a new folder with the project files and directories you need to get started.

## Validating Email Addresses

The email adress is validated using an email regex to ensure that only valid email addresses are stored in the mails.txt file.