// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const { type } = require('os');
const generateMarkdown = ({title, description, installation, usage, contribution, tests, license}) =>
    `# ${title}

## Description
${description}

## Installation
${installation}


## Usage
${usage}

## Credits
${contribution}

## Tests
${tests}

## License
${license}

`
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "title",
    }, {

        type: "input",
        message: "Add the description of your project",
        name: "description",
    }, {


        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
    }, {


        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage",
    }, {


        type: "input",
        message: "List your collaborators or any third party assets",
        name: "contribution",
    }, {


        type: "input",
        message: "Test instructions",
        name: "tests",
    }, {
        type: "list",
        message:"What license will you use?",
        name: "license",
        choices: ["MIT License", "Apache 2.0 License", "Boost Software License 1.0", "Mozilla Public License 2.0"]
    }

];
inquirer
.prompt(questions)
.then((data)=> {
    const readMeContent = generateMarkdown(data);
    
    // TODO: Create a function to write README file
    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Succesfully created README.md!'));
});

// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
