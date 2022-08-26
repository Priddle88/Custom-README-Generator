//grabs the inquirer 8.2.4 that we need for node
const inquirer = require('inquirer');
// grabs the fs to write the file
const fs = require('fs');
const licenses = ["MIT", "GNU GPLv3"];

// function that grabs the variables from the prompts and makes a README file
const makeReadme = ({ title, description, installation, screenshot, license, usage, credits, test, github, email }) =>

    `# ${title}

![License logo](./assets/${licenseInfo(licenses)})

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

![Screenshot of site](./assets/${screenshot}.png)

[Screen recording of using file](https://youtu.be/kcY75H0SkpE "Screen recording of using file")

## License

${license}

## Contributing

${credits}

## Tests

${test}

## Questions

GitHub username: ${github}

GitHub profile: [Link to Profile](https://github.com/${github})

Reach out to ${email} (with your first name included) if you have any questions!
`;

const licenseInfo = (licenses) => {
    let licImage = '';

    if (licenses == "MIT") {
        licImage = "MIT-License.png";
    } else {
        licImage = "GPL-V3-license-image.png";
    }
    console.log(licImage);
    return licImage;
}


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description of project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Link of screenshot',
            name: 'screenshot',
        },
        {
            type: 'input',
            message: 'Instructions for how to use:',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Choose an open source license',
            choices: licenses,
            name: 'license',
        },
        {
            type: 'input',
            message: 'List any collaborators/third-party assets?',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'Instructions to test:',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Enter your Github username',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is you email?',
            name: 'email',
        }
    ]).then((response) => {

        console.log(response);

        fs.writeFile("new/README.md", makeReadme(response), (err) =>
            err ? console.error(err) : console.log("Success!")
        );

    });