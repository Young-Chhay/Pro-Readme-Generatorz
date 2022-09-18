// use Createfile or AppendFile to create 
// link them to Readme
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description,
// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//WHEN I enter my project title
//THEN this is displayed as the title of the README

//WHEN WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README
const inquirer = require('inquirer');
const fs = require('fs');


const generateREADME = ({ title, description, contents, installation, usage, licenses, contributing, tests, githubName, githubLink }) =>
    `# ${title}
# Description   ${licenses} 
## ${description} 
---
___
# Installation Instructions
## ${installation}
___
# Usage Information
## ${usage}
___
# Contribution Guidelines
## ${contributing}
___
# Test Instructions
## ${tests}

# License
## 🏆 ${licenses} 
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

# Got Questions ? Reach me using below information !
## Github Username: ${githubName}. 
* [${githubName}](${githubLink} "${githubName}page")

    ---
    ___`;


inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter project description?',
        },
        {
            type: 'input',
            name: 'contents',
            message: 'Please enter project contents?',
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
        {
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
    .then((answers) => {
        const readMePageContent = generateREADME(answers);

        fs.writeFile('README.md', readMePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md File!')
        );
    });