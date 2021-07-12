// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    //Title of Project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    //Description of Project
    {
        type: 'input',
        name: 'description',
        message: 'Tell us a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation details!');
                return false;
            }
        }
    },
    //Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Pleaes enter usage information!');
                return false;
            }
        }
    },
    //Contribution Guidelines
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to your project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines!');
                return false;
            }
        }
    },
    //Testing Instructions
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test your project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please enter testing instructions!');
                return false;
            }
        }
    },
    //License
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Select the license that covers your project.',
        choices: ['Apace', 'MIT', 'Mozilla-Public', 'GNU-General Public', 'Common-Development-and-Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Select a license option!');
                return false;
            }
        }
    },
    //Enter GitHub Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.(Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.(Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
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
const init = () => {
    return inquirer.prompt(questions)
        .then(data => {
            return data;
        })
}

// Function call to initialize app
init()
    .then(data => {
        console.log(data);
        return generateMarkdown(data);
    })
    .then(page => {
        return writeToFile(page);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    })
