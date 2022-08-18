//grabs the inquirer 8.2.4 that we need for node
const inquirer = require('inquirer');
// grabs the fs to write the file
const fs = require('fs');

// function that grabs the variables from the prompts and makes a README file
const makeReadme = ({name, motivation, why, problem, learned}) =>
`# Custom-README-Generator

A custom README created with Node!

## My name is ${name}

${motivation}

## Why

${why}

${problem}

## What I learned

${learned}`;

//uses inquirer to prompt the user to create a README and run the function
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'motivation',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'why',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learned',
    }
]) .then ((response) => {
        console.log(`Name: ${response.name}`);
        console.log(`Location: ${response.motivation}`);
        console.log(`Bio: ${response.why}`);
        console.log(`linked: ${response.problem}`);
        console.log(`github: ${response.learned}`);

        fs.writeFile("README.md", makeReadme(response), (err) =>
            err ? console.error(err) : console.log("Success!")
        );

});