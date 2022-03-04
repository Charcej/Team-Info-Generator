const engineerQuest = [
    {
    name: 'name',
    message: 'Please enter the name of the engineer:',
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
    message: 'Please enter the ID number of the engineer:',
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
    message: 'Please enter the email address of the engineer:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid email address:';
        }
    },
    {
    name: 'gitHub',
    message: 'Please enter the GitHub username:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid GitHub username:';
        }
    },
];

module.exports = engineerQuest