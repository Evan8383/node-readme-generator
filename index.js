// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'list',
    message: 'what coding languages do you know?',
    name: 'title',
    choices: ['CSS', 'HTML', 'JS']
  },
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name'
  }
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
