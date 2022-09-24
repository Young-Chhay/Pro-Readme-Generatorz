const inquirer = require('inquirer');
const fs = require('fs');

// Contstructing Readme, adding inquirer response into sections and setup the README.md template. 
const generateREADME = ({ title, description, installation, usage, licenses, contributing, tests, githubName, githubLink }) =>
    `# ${title}
# Description  ${licenses}
## ${description} 
## Build logic to capture the input and append respond to create a Professional Readme file. A high-quality README file explains what your application does and why you used the technologies that you did. At a bare minimum, a README needs a title and a short description
___
# Installation Instructions
## ${installation}
___
# Usage Information
## ${usage}
___
# Contribution Guidelines
## ${contributing} and Create a new branch that you will work on and submit pull request when ready. 
___
# Test Instructions
## ${tests}
___
# License 🏆 
## ${licenses} was used for this application. 
___ 
### [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
The MIT License is short and to the point. It lets people do almost anything they want with your project, like making and distributing closed source versions.
___
### [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
The GNU GPLv3 also lets people do almost anything they want with your project, except distributing closed source versions.
___
### [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
The 3-Clause BSD License allow Redistribution and use in source and binary forms, with or without modification. They are permitted provided that the following conditions are met: 
* Source code must retain the above copyright notice,
* Binary form must reproduce the above copyright notice, 
* Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
---
___
> I spend most of the time working on the coding the logic in Node to get it to generate the Readme.md file correctly. This assignment were not as complicated as the others because I understood it much better. 
Applying Styling to Readme and test out license and badge took alot of time appending them to the correct place. It was took alot of time to go through at first but after reviewing and help from Instructor/TAs,
the logic became more clear and I was able to apply the concept and made it work. 
---

# Got Questions ? Reach me using below information !
## Github Username: ${githubName} 
* [${githubName}](${githubLink} "${githubName}page")

    ___`;

// setup inquirer run with questions and store respondd from users.
inquirer
    .prompt([
        { //WHEN I enter my project title, it show on the readme. 
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        { //WHEN I enter my project description it show on the readme with my respond. 
            type: 'input',
            name: 'description',
            message: 'Please enter project description?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation methods?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the usage of this application',
        },
        { // set up checkbox with 3 option of licenses to choose for this application. 
            type: 'checkbox',
            message: 'Please pick your Licenses.',
            name: 'licenses',
            choices: ['[![License:BSD-3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter your contribution.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter your tests.',
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'Enter your GitHub Username.',
        },
        {
            type: 'input',
            name: 'githubLink',
            message: 'Enter your GitHub link.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
    ])
    // use .then to capture respond and pass the respond into generateREADME function. 
    .then((answers) => {
        const readMePageContent = generateREADME(answers);
        // Used fs.writeFile to create a Readme.Md everytime . 
        fs.writeFile('README.md', readMePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md File!')
        );
    });