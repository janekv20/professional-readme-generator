// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'no license') {
        return `![badge](https://img.shields.io/badge/license-${license}-green)`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'no license') {
        return `
        [${license}](https://choosealicense.com/licenses/${license})`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'no license') {
        return `
        ## License

        This project is covered by the following ${license}.
        `;
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table-of-Contents

* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contribution)
* [Testing Instructions](#testing)
* [Contact](#contact)

## [Description](#table-of-contents)

    ${data.description}
    
## [Installation](#table-of-contents)

    ${data.installation}

## [Usage](#table-of-contents)

    ${data.usage}

## [Contribution](#table-of-contents)

    ${data.contribution}

## [Testing](#table-of-contents)

    ${data.testing}

## [Contact](#table-of-contents)

   [GitHub Repository](https://github.com/${data.github})

   [Email Address: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
