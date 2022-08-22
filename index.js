// TODO: Include packages needed for this application
    const inquirer = require('inquirer');
    const generateMarkdown = require('./utils/generateMarkdown');
    const fs = require('fs');
    const path = require('path');
//Creates an array of questions for the user to input into their readme
inquirer.prompt([
    {
        name: "Title",
        message: "What is your project titled?",
        type: "input"
    },
    {
        name: "Description",
        message: "Give a short description of your work!",
        type: "input"
    },
    {
        name: "Installation",
        message: "Provide an explanation of the steps required to install your project.",
        type: "input"
    },
    {
        name: "Usage",
        message: "Write instructions for use. Include deployed screenshots in this section as well.",
        type: "input"
    },
    {
        name: "Credits",
        message: "List collaborators and tutorials followed!",
        type: "input"
    },
    {
        name: "Test",
        message: "Fill in test instructions.",
        type: "input"
    },
    {
        name: "License",
        message:"Which is your preferred license?",
        type:"list",
        choices:["MIT", "Apache 2.0", "Boost", "none"]
    },
    {
        name: "GitHub",
        message: "What is your Github username?",
        type: "input"
    },
    {
        name: "Email",
        message: "What is your email address?",
        type: "input"
    }
// this function gives the generateMarkdown file all of the responses that are typed in above
]).then(responses => {
    fs.writeFileSync(path.join(process.cwd(), "readMe.md"), generateMarkdown(responses))
})

