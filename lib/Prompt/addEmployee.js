const { prompt } = require("inquirer");
const Employee = require("../Employee");
const employeeQuest = require('../../quest/Employee.quest');

const addEmployee = async () => {
    const employeeAnswers = await prompt(employeeQuest);
    const { name, id, email } = employeeAnswers;
    const employee = new Employee(name, id, email);
    console.log(employee);
    return employee;
};

module.exports = addEmployee;