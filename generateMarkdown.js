// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'no license') {
        return '';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'no license') {
        return '';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'no license') {
        return '';
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ${renderLicenseBadge(data.license)}

    ## Table-of-Contents

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

    ## [Contribution Guidelines](#table-of-contents)

    ${data.contribution}

    ## [Testing Instructions](#table-of-contents)

    ${data.testing}

    ## [Contact](#table-of-contents)

   [GitHub Repository](https://github.com/${data.github})

   [Email Address: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
