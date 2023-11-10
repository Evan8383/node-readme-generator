// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter a project title:',
    name: 'title',
  },
  {
    type: "editor",
    message: "After writing your document, save and close the editor - Write a description for your project.",
    name: "description"
  },
  {
    type: "editor",
    message: "After writing your document, save and close the editor - Write installation instructions for your project.",
    name: "install"
  },
  {
    type: "editor",
    message: "After writing your document, save and close the editor - Write usage instructions for your project.",
    name: "usage"
  },
  {
    type: "editor",
    message: "After writing your document, save and close the editor - Write contribution instructions for your project.",
    name: "contribution"
  },
  {
    type: "editor",
    message: "After writing your document, save and close the editor - Write testing instructions for your project.",
    name: "test"
  },
  {
    type: 'list',
    message: 'Select a License for your project:',
    name: 'license',
    choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'Other/None']
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "gitHubUser"
  },
  {
    type: "input",
    message: "Enter your best contact email:",
    name: "installInstructions"
  },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  await fs.writeFile(`./test/${fileName}`, data)
}

// TODO: Create a function to initialize app
async function init() {
  const data = await inquirer.prompt(questions)

  writeToFile('README.md', generateMarkdown(data))
}
// Function call to initialize app
init();
