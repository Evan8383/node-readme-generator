const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs').promises;

const questions = [
  {
    type: 'input',
    message: 'Enter a project title:',
    name: 'title',
  },
  {
    type: "input",
    message: "Write a description for your project.",
    name: "description"
  },
  {
    type: "input",
    message: "Write installation instructions for your project.",
    name: "install"
  },
  {
    type: "input",
    message: "Write usage instructions for your project.",
    name: "usage"
  },
  {
    type: "input",
    message: "Write contribution instructions for your project.",
    name: "contribution"
  },
  {
    type: "input",
    message: "Write testing instructions for your project.",
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
    name: "email"
  },
];

async function writeToFile(fileName, data) {
  await fs.writeFile(`./test/${fileName}`, data)
}

async function init() {
  const data = await inquirer.prompt(questions)

  writeToFile('README.md', generateMarkdown(data))
}
// Function call to initialize app
init();
