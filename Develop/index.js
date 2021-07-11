// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = required('./Develop/utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    //Title of Project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? This is a required question.'
    },
    //Description of Project
    {
        type: 'input',
        name: 'description',
        message: 'Tell us a description of your project. This field is required.'
    },
    //Table of Contents
    {},
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? This field is required.'
    },
    //Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project? This field is required.'
    },
    //Contribution Guidelines
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to your project? This field is required.'
    },
    //Testing Instructions
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test your project? This field is required.'
    },
    //License
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Select the license that covers your project.',
        choices: ['Apace', 'MIT', 'Mozilla-Public', 'GNU-General Public', 'Common-Development-and-Distribution', 'None'],
    },
    //Enter GitHub Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username. This field is required.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err) => {
        if (err)
            throw err;
        console.log('Information is generated! Check out the README to see the output.')
    });
};

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
