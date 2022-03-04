const internQuest = [
    {
    name: 'name',
    message: 'Please enter the name of the intern:',
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
    message: 'Please enter the ID number of the intern:',
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
    message: 'Please enter the email address of the intern:',
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
    message: 'Please enter the where the intern went to school:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a school name:';
        }
    },
];

module.exports = internQuest