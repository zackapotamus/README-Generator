var inquirer = require('inquirer');
var api = require("./utils/api.js");
var gm = require('./utils/generateMarkdown.js');


const questions = [{
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "GNU GPL v3", "APACHE 2.0", "BSD 3", "CC0 1.0", "Mozilla", "None"],
        default: "None",
        filter: function(license) {
            let ret;
            switch (license) {
                case "MIT":
                    ret = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                    break;
                case "GNU GPL v3":
                    ret = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                    break;
                case "APACHE 2.0":
                    ret = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                    break;
                case "BSD 3":
                    ret = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                    break;
                case "CC0 1.0":
                    ret = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
                    break;
                case "Mozilla":
                    ret = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                    break;
                default:
                    ret = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            }
            return {badge: ret, name: license};
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm install"
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
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    }
];

// function writeToFile(fileName, data) {

// }

function init() {
    inquirer.prompt(questions).then(answers => {
        // answers: username, title, description, license, installation, tests, usage, contributing
        console.log(JSON.stringify(answers, null, '  '));
        const apiData = api.getUser(answers);
        // console.log(apiData);
    });
}

init();