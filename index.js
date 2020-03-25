const questions = [{
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "projectName",
        message: "Please write a short description of your project:"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "GNU GPL v3", "APACHE 2.0", "BSD 3", "Creative Commons", "Mozilla", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to test?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What does the user need to know about contributing to the repo?"
    }
];

function writeToFile(fileName, data) {}

function init() {

}

init();