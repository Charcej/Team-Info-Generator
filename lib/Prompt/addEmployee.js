const { prompt } = require("inquirer");
const Employee = require("../Employee");
const employeeQuestions = require('../../questions/Employee.questions');

const addEmployee = async () => {
    const employeeAnswers = await prompt(employeeQuestions);
    const { name, id, email } = employeeAnswers;
    const employee = new Employee(name, id, email);
    console.log(employee);
    return employee;
};

module.exports = addEmployee;