// const path = require('path');
// const inquirer = require('inquirer');
// const fs = require('fs');
// const profileDataArgs = process.argv.slice(2);
// const [Description, Contents, Installation, Usage, License, Contributing, Tests, Questions] = filedataargs;

function init() {

const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {type: "input",
    message: "enter the title: ",
    name: "title",  
    },
    { type: "input",
      message: "enter project summary: ",
      name: "description",  
    },
    { type: "input",
    message: "enter the installation: ",
    name: "Installation",  
    },
    { type: "input",
    message: "enter the usage: ",
    name: "Usage",  
    },
    { type: "list",
    message: "enter the license: ",
    name: "License",  
    choices: [
        {
            name: "MIT",
            value:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        },
        {
            name: "Mozilla",
            value:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        },
        {
            name: "Apache",
            value:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        }
        
    ]
    },
    { type: "input",
    message: "enter the contributors: ",
    name: "Contributors",  
    },
    { type: "input",
    message: "enter the tests: ",
    name: "Tests",
    },
    { type: "input",
    message: "enter the question:",
    name: "Questions",  
    },
    { type: "input",
    message: "enter GitHub username",
    name: "GitHubUsername",
    },
    { type: "input",
    message: "enter email address",
    name: "EmailAddress",}
  ])
  .then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), "README.md"), generateREADME(response));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment")
    } else {
      // Something else went wrong
      console.log("Something else went wrong")
    }
  });
  };

function generateREADME(data) {
    return `# ${data.title}
${data.License}

<!-- TABLE OF CONTENTS -->
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation </a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#tests">tests</a></li>
    <li><a href="#questions">Questions</a></li>
</ol>

## Description
    ${data.description}

## Installation
    ${data.Installation}

## Usage
    ${data.Usage}

##  License

##  Contributing
    ${data.Contributing}

##  Tests
    ${data.Tests}

##  Questions
${data.Questions}
    
[${data.GitHubUsername}](https://github.com/${data.GitHubUsername})


${data.EmailAddress}`






}

init();
