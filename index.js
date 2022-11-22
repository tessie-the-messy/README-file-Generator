// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
  // questions: Project Title, description, installation instructions, usage information, contribution guildelines, test instructions, liscense (label and shield at top),  github username, email address

const questions = [
  {
    type: "input",
    message: "What is the title of your Project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project's functionality in a few sentences.",
    name: "description",
  },
  {
    type: "input",
    message: "Give Installation instructions to your user in a few sentences.",
    name: "installation",
  },
  {
    type: "input",
    message:
      "What information do users need to know about usage of your project?",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Please list the names and websites/git hub profiles of any contributors.",
    name: "credits",
  },
  {
    type: "input",
    message:
      "Describe any test written and provide examples of how to run them",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose which license",
    name: "license",
    choices: ["MIT", "GPLv2", "GPLv3", "Apache", "Other/None"],
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

function init() {
  inquirer.prompt(questions).then((response) => {
    const data = generateMarkdown(response);
    writeFile("./ReadMeFile/README.md", data);
  });
}

// TODO: Create a function to write README file

function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("README successfully created!");
    }
  });
}
// // TODO: Create a function to initialize app

// // Function call to initialize app
init();
