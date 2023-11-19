
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'GPLv2':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    case 'GPLv3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    default:
      return '';
  }
}

function renderLicenseLink(license) { 
  switch (license) {
    case 'MIT':
      return `[MIT](https://opensource.org/licenses/MIT)`;
    case 'GPLv2':
      return `[GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    case 'GPLv3':
      return `[GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
    case 'Apache':
      return `[Apache](https://opensource.org/licenses/Apache-2.0)`
    default:
      return '';
  }
}

function renderLicenseSection(license) { 
  switch (license) {
    case 'MIT':
      return `## Project License: 
### This project uses the ${ license } license

For more information on the license used for this project, and the rights to this project, click on the following link: ${ renderLicenseLink(license) }`;

    case 'GPLv2':
      return `## Project License: 
### This project uses the ${ license } license

For more information on the license used for this project, and the rights to this project, click on the following link: ${ renderLicenseLink(license) }`;

    case 'GPLv3':
      return `## Project License: 
### This project uses the ${ license } license

For more information on the license used for this project, and the rights to this project, click on the following link: ${ renderLicenseLink(license) }`;

    case 'Apache':
      return `## Project License: 
### This project uses the ${ license } license

For more information on the license used for this project, and the rights to this project, click on the following link: ${ renderLicenseLink(license) }`;
    default:
      return '## Project License:';
  }
}

function generateMarkdown({ title, description, install, usage, license, contribution, test, gitHubUser, email }) {
  return `# ${title} ${renderLicenseBadge(license)}
  
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Testing](#testing)
6. [License](#license)
7. [Questions](#questions)

## Description
${ description }

## Installation
${ install }

## Usage
${ usage }

## Contributing
${ contribution }

## Testing
${ test }

${ renderLicenseSection(license) }

## Questions
For questions the project, I can be contacted through GitHub or via email.

GitHub - https://github.com/${ gitHubUser }

Email - ${ email }`;
}

module.exports = generateMarkdown;
