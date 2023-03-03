// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a short description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Describe the installation process for your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe what uses your project has.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Add any licenses that apply to your project.',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Explain how one would contribute to your project.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What commands need to be run to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Add your GitHub profile and email address.',
        name: 'questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) =>
        writeToFile('./README.md', generateMarkdown({ ...response }))
    );
}

// Function call to initialize app
init();
