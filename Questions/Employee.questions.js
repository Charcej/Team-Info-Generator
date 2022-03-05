const employeeQuestions = [
    {
    name: 'name',
    message: 'Please enter the name of the employee:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'A name is required. Please enter a name:';
        }
    },
    {
    name: 'id',
    message: 'Please enter the ID number of the employee:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid ID:';
        }
    },
    {
    name: 'email',
    message: 'Please enter the email address of the employee:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid email address:';
        }
    },
];

module.exports = employeeQuestions