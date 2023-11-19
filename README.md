# README Generator

This is a simple command-line application that generates a README file for your project based on user input. It utilizes Node.js, the `inquirer` package for prompting users with questions, and the `fs.promises` module for writing the generated README file.

## Table of Contents
- [Links](#links)
- [Running the app](#how-to-run-the-application)
- [Dependencies](#dependencies)
- [Questions Asked](#questions-asked)
- [File Generation](#file-generation)
- [License Badges](#license-badges)
- [License Information](#license-information)
- [Markdown Generation](#markdown-generation)
- [Screenshots](#screenshots)
- [References](#references)

## Links
- Repo: https://github.com/Evan8383/node-readme-generator

## How to Run the Application

### Step 1: Clone the Repository
  - Clone this repository to your local machine using the following command: 
    > `git clone https://github.com/Evan8383/node-readme-generator`
### Step 2: Navigate to the Project Directory
  - Change your working directory to the cloned repository:
    > `cd node-readme-generator`
### Step 3: Install Dependencies
  - Before running the application, make sure to install the required Node.js packages. Use the following command:
    > `npm install`
### Step 4: Run the Application
  - Execute the following command to start the README generation process:
    > `node index.js`
  - Answer the prompted questions about your project. Once you have provided all the necessary information, the application will generate a README.md file in the ./test/ directory.
### Step 5: View the Generated README
  - Navigate to the ./test/ directory to find the generated README.md file. Open it in your preferred markdown viewer to review the content.
  - Feel free to customize the application or the generated README template based on your project's specific needs. If you encounter any issues or have questions, please don't hesitate to reach out for assistance.

## Dependencies
Before running the application, make sure to install the required packages using the following command:
- inquirer
- fs.promises

## Questions Asked

The application will prompt the user with the following questions:

1. Project title
2. Project description
3. Installation instructions
4. Usage instructions
5. Contribution guidelines
6. Testing instructions
7. Project license (options: MIT, GPLv2, GPLv3, Apache, Other/None)
8. GitHub username
9. Contact email

## File Generation

The application will create a `README.md` file in the `./test/` directory based on the provided answers.

## License Badges

The application generates a license badge in the README based on the selected license. The following badges are supported:

- MIT
- GPLv2
- GPLv3
- Apache

## License Information

The application includes a license section in the generated README, providing a link to the selected license for more information on usage and rights.

## Markdown Generation

The `generateMarkdown` function takes user input and generates the markdown for the README file. It includes sections for project description, installation, usage, contributing, testing, license, and contact information.

Feel free to use and modify this README generator for your projects! If you have any questions or suggestions, please feel free to reach out.

**Note:** Replace the `generateMarkdown` function in `./utils/generateMarkdown.js` with your own custom template if needed.

## Screenshots

![CLI Preview](./assets/Screenshot%202023-11-19%20080837.png)

## References

### Badges are sourced from the following GitHub repo:
- https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
- https://gist.github.com/kofiav/c1059e1075b67582e86b07aa9759e20d