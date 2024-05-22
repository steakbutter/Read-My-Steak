// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
