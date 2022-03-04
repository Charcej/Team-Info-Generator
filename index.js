const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const managerQuest = require('./quest/Manager.quest');
const addEmployee = require('./lib/Prompt/addEmployee');
const addEngineer = require('./lib/Prompt/addEngineer');
const addIntern = require('./lib/Prompt/addIntern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML');
const { resolve } = require('path');
const userResponse = [];

const addManager = async () => {
    const managerAnswers = await inquirer.prompt(managerQuest)
    const {name, id, email, officeNumber} = managerAnswers;
    const manager = new Manager (name, id, email, officeNumber);
    userResponse.push(manager);
    console.log(manager)
};

const addStaff = async () => {
    console.log('Select additional staff members');

   const userInput = await inquirer.prompt([
        {
            type: 'list',
            name: 'staffSelection',
            message: 'What staff member would you like to add next?',
            choices: [
                'Employee', 'Intern', 'Engineer', 'No more'
            ],
        },
    ]);
    switch (userInput.staffSelection) {
        case 'Engineer':
            const engineer = await addEngineer();
            userResponse.push(engineer);
            break;
        case 'Intern':
            const intern =  await addIntern();
            userResponse.push(intern);
            break;
        case 'Employee':
            const employee = await addEmployee();
            userResponse.push(employee);
            break;
        default:
            const HTMLFile = await generateHTML(userResponse)
            console.log(HTMLFile);
            await writePage(HTMLFile);
            process.exit(0);
    };

    console.log('Add:', userInput.staffSelection);
    addStaff();
};

const writePage = HTML => new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', HTML, err => {
        if (err){
            reject(err);
        } else {
            resolve();
            console.log('You have successfully created your team info')
        }
    })
});

console.log(`Welcome to the Team Info Generator, let's start by adding your employees.`);

addManager()
.then(addStaff);