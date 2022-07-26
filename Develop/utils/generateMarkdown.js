
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license=="MIT"){
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license=="Apache 2.0"){
    return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  } else if (license=="Boost"){
    return "![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}

## Table of Contents

* [Installation](#Installation)

* [Usage](#Usage)

* [Credits](#Credits)

* [License](#License)

* [Contact](#Contact)

## Installation 

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseSection(data.license)}

## Contact

[GitHub](https://github.com/${data.github})

[Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
