const managerQuest = [
    {
    name: 'name',
    message: 'Please enter the name of the manager:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'A manager name is required. Please enter a name:';
        }
    },
    {
    name: 'id',
    message: 'Please enter the ID of the manager:',
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
    message: 'Please enter the email address of the manager:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid email address:';
        }
    },
    {
    name: 'officeNumber',
    message: 'Please enter the office number of the manager:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid office number:';
        }
    },
];

module.exports = managerQuest