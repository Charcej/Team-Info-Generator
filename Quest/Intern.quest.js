const internQuest = [
    {
    name: 'name',
    message: 'Please enter the interns name:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'A interns name is required please enter a name:';
        }
    },
    {
    name: 'id',
    message: 'Please enter the interns ID:',
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
    message: 'Please enter the interns email address:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid email address:';
        }
    },
    {
    name: 'school',
    message: 'Please enter the interns school:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter the interns school:';
        }
    },
];

module.exports = internQuest