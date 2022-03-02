const managerQuest = [
    {
    name: 'name',
    message: 'Please enter the managers name:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'A managers name is required please enter a name:';
        }
    },
    {
    name: 'id',
    message: 'Please enter the managers ID:',
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
    message: 'Please enter the managers email address:',
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
    message: 'Please enter the managers office number:',
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